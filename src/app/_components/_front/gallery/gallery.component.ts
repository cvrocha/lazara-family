/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  photos: { id: number; src: string; alt: string; category: string }[] = []
  categories: string[] = [] // Armazenar categorias únicas
  selectedCategory = 'all'
  modalDisplay = 'none'
  modalImgSrc = ''
  modalCaption = ''
  currentIndex = 0

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch data from the JSON file
    this.http
      .get<
        { id: number; name: string; image: string; category: string }[]
      >('assets/photos.json')
      .subscribe((data) => {
        // Atribuindo um ID único usando uuid
        this.photos = data.map((photo) => ({
          id: uuidv4(), // ID dinâmico gerado com uuid
          src: photo.image,
          alt: photo.name,
          category: photo.category,
        }));

        // Adicionar o "all" ao início das categorias únicas
        this.categories = [

          ...new Set(this.photos.map((photo) => photo.category)),
        ];
        this.filterSelection('all'); // Inicializar com todas as imagens
      });
  }

  filterSelection(category: string): void {
    this.selectedCategory = category
  }

  openModal(photo: { src: string; alt: string; category: string }): void {
    this.modalImgSrc = photo.src
    this.modalCaption = photo.alt || ''
    this.modalDisplay = 'block'

    // Adiciona classe para desabilitar scroll da página
    document.body.classList.add('modal-open')

    // Adiciona overflow: hidden !important diretamente no estilo do body
    document.body.style.setProperty('overflow', 'hidden', 'important')
  }

  closeModal(): void {
    this.modalDisplay = 'none'

    // Remove a classe para habilitar novamente o scroll da página
    document.body.classList.remove('modal-open')

    // Remove overflow: hidden !important do estilo do body
    document.body.style.removeProperty('overflow')
  }

  prevImage(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.photos.length - 1
    this.updateModalImage()
  }

  nextImage(): void {
    this.currentIndex =
      this.currentIndex < this.photos.length - 1 ? this.currentIndex + 1 : 0
    this.updateModalImage()
  }

  updateModalImage(): void {
    const photo = this.photos[this.currentIndex]
    this.modalImgSrc = photo.src
    this.modalCaption = photo.alt
  }

  downloadImage(src: string, alt: string): void {
    const proxyUrl = ''; // Se necessário, insira o URL do proxy
    const targetUrl = src;

    fetch(proxyUrl + targetUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(async (blob) => {
        const fileName = alt || 'downloaded-image.jpg';

        // Verifica se a API de File System Access está disponível
        if ('showSaveFilePicker' in window) {
          try {
            // Abre o seletor de arquivos para salvar
            const fileHandle = await (window as any).showSaveFilePicker({
              suggestedName: fileName,
              types: [{
                description: 'Images',
                accept: {
                  'image/*': ['.jpg', '.jpeg', '.png', '.gif'],
                },
              }],
            });

            // Escreve o arquivo no local escolhido pelo usuário
            const writable = await fileHandle.createWritable();
            await writable.write(blob);
            await writable.close();
            console.log('Arquivo salvo com sucesso!');
          } catch (error) {
            console.error('Erro ao salvar o arquivo:', error);
          }
        } else {
          // Fallback para navegadores sem suporte à API de File System Access
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      })
      .catch((error) => {
        console.error('Houve um erro ao baixar a imagem:', error);
      });
  }



}
