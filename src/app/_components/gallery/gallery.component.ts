import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos = [
    { src: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg', alt: 'Photo 1', category: 'nature' },
    { src: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg', alt: 'Photo 2', category: 'city' },
    { src: 'https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg', alt: 'Photo 3', category: 'people' },
    { src: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg', alt: 'Photo 4', category: 'nature' },
    { src: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg', alt: 'Photo 5', category: 'city' },
    { src: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg', alt: 'Photo 6', category: 'people' },
    { src: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg', alt: 'Photo 7', category: 'nature' },
    { src: 'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg', alt: 'Photo 8', category: 'city' }
  ];

  selectedCategory = 'all';
  modalDisplay = 'none';
  modalImgSrc = '';
  modalCaption = '';
  currentIndex = 0;

  ngOnInit(): void {
    this.filterSelection('all');
  }

  filterSelection(category: string): void {
    this.selectedCategory = category;
  }

  openModal(photo: { src: string; alt: string; category: string }): void {
    this.modalDisplay = 'block';
    this.modalImgSrc = photo.src;
    this.modalCaption = photo.alt;
    this.currentIndex = this.photos.indexOf(photo);
  }

  closeModal(): void {
    this.modalDisplay = 'none';
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.photos.length - 1;
    this.updateModalImage();
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex < this.photos.length - 1) ? this.currentIndex + 1 : 0;
    this.updateModalImage();
  }

  updateModalImage(): void {
    const photo = this.photos[this.currentIndex];
    this.modalImgSrc = photo.src;
    this.modalCaption = photo.alt;
  }
}
