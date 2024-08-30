/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  birthdays: any[] = [];
  responsiveOptions: any[];

  constructor(private http: HttpClient) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.loadBirthdays();
  }

  loadBirthdays(): void {
    this.http.get<any[]>('assets/users.json').subscribe(data => {
      const currentMonth = new Date().getMonth() + 1;
      this.birthdays = data.filter(person => new Date(person.birthday.split('/').reverse().join('-')).getMonth() + 1 === currentMonth);
    }, error => console.error('Erro ao carregar o arquivo JSON', error));
  }

  formatBirthday(date: string): string {
    const [day, month] = date.split('/');
    return `${day}/${month}`;
  }
}
