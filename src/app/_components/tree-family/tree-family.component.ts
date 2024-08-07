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
        item.addEventListener('click', (e: Event) => {
            const children = item.querySelector('ul') as HTMLElement;
            if (children) {
                if (children.style.display === 'block') {
                    children.style.display = 'none';
                    children.classList.remove('active');
                } else {
                    children.style.display = 'block';
                    children.classList.add('active');
                }
            }
            e.stopPropagation();
        });
    });
  }
}
