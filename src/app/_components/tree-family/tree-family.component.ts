import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tree-family',
  templateUrl: './tree-family.component.html',
  styleUrls: ['./tree-family.component.css']
})
export class TreeFamilyComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initializeTree();
  }

  initializeTree() {
    const querySelector = (selector: string) => document.querySelector(selector) as HTMLElement;
    const querySelectorAll = (selector: string) => document.querySelectorAll(selector);

    querySelector('.genealogy-tree ul')!.style.display = 'none';
    querySelector('.genealogy-tree > ul')!.style.display = 'block';

    const listItems = querySelectorAll('.genealogy-tree li');
    listItems.forEach((item) => {
      const toggleIcon = item.querySelector('.toggle-icon') as HTMLElement;
      const children = item.querySelector('ul') as HTMLElement;

      if (children) {
        toggleIcon.style.display = 'flex';
        toggleIcon.addEventListener('click', (e: Event) => {
          if (children.style.display === 'block') {
            children.style.display = 'none';
            toggleIcon.textContent = '+';
            toggleIcon.classList.remove('open');
            toggleIcon.classList.add('closed');
          } else {
            children.style.display = 'block';
            toggleIcon.textContent = '-';
            toggleIcon.classList.remove('closed');
            toggleIcon.classList.add('open');
          }
          e.stopPropagation();
        });
      } else {
        toggleIcon.style.display = 'none';
      }
    });
  }

}


