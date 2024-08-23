/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {
  @Input() dots = true;
  @Input() speed = 500;
  @Input() slidesToShow = 1;
  @Input() slidesToScroll = 1;
  @Input() arrowsButtons = true;
  @Input() autoplay = false;
  @Input() autoplaySpeed = 0;
  @Input() fade = false;
  @Input() cssEase = 'linear';
  @Input() infinite = false;
  @Input() responsive: any[] = [
    { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ];

  birthdays: any[] = [];
  currentSlide = 0;
  itemsPerPage = this.slidesToShow;
  autoplayInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBirthdays();
    this.updateItemsPerPage();
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  loadBirthdays(): void {
    this.http.get<any[]>('assets/users.json').subscribe(data => {
      const currentMonth = new Date().getMonth() + 1;
      this.birthdays = data.filter(person => new Date(person.birthday.split('/').reverse().join('-')).getMonth() + 1 === currentMonth);
    }, error => console.error('Erro ao carregar o arquivo JSON', error));
  }

  nextSlide(): void {
    if (this.canGoNext()) this.currentSlide += this.slidesToScroll;
  }

  prevSlide(): void {
    if (this.canGoPrev()) this.currentSlide -= this.slidesToScroll;
  }

  getVisibleBirthdays(): any[] {
    return this.birthdays.slice(this.currentSlide, this.currentSlide + this.itemsPerPage);
  }

  showSlider(): boolean {
    return this.birthdays.length > this.itemsPerPage;
  }

  getDotIndex(): number {
    return Math.floor(this.currentSlide / this.slidesToScroll);
  }

  getTotalDots(): number {
    return Math.ceil((this.birthdays.length - this.itemsPerPage) / this.slidesToScroll) + 1;
  }

  getTransformStyle(): string {
    const percentage = (this.currentSlide / this.birthdays.length) * 100;
    return `translate3d(-${percentage}%, 0, 0)`;
  }

  updateItemsPerPage(): void {
    const width = window.innerWidth;
    for (const setting of this.responsive) {
      if (width <= setting.breakpoint) {
        this.itemsPerPage = setting.settings.slidesToShow;
        this.slidesToScroll = setting.settings.slidesToScroll;
        this.dots = setting.settings.dots !== undefined ? setting.settings.dots : this.dots;
        break;
      }
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateItemsPerPage();
  }

  canGoNext(): boolean {
    return this.currentSlide + this.itemsPerPage < this.birthdays.length;
  }

  canGoPrev(): boolean {
    return this.currentSlide - this.slidesToScroll >= 0;
  }

  formatBirthday(date: string): string {
    const [day, month] = date.split('/');
    return `${day}/${month}`;
  }

  goToSlide(index: number): void {
    this.currentSlide = index * this.slidesToScroll;
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.goToSlide(index);
    }
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      if (this.canGoNext()) {
        this.nextSlide();
      } else if (this.infinite) {
        this.currentSlide = 0;
      }
    }, this.autoplaySpeed);
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  @HostListener('window:blur')
  onWindowBlur(): void {
    this.stopAutoplay();
  }

  @HostListener('window:focus')
  onWindowFocus(): void {
    if (this.autoplay) {
      this.startAutoplay();
    }
  }
}
