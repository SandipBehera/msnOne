import { NgFor, NgIf } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-gallery',
  imports: [MatIconModule,NgFor,NgbCarouselModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  providers: [NgbCarouselConfig]
})
export class GalleryComponent {
  images = [
    {
      thumbnail: 'property_img/prop1.png',
      full: 'property_img/prop1.png',
      alt: 'Table Full of Spices',
    },
    {
      thumbnail: 'property_img/prop11.png',
      full: 'property_img/prop11.png',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'property_img/prop3.png',
      full: 'property_img/prop3.png',
      alt: 'View of the City in the Mountains',
    },
    {
      thumbnail: 'property_img/prop4.png',
      full: 'property_img/prop4.png',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'property_img/prop5.png',
      full: 'property_img/prop5.png',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'property_img/prop6.png',
      full: 'property_img/prop6.png',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'property_img/prop7.png',
      full: 'property_img/prop7.png',
      alt: 'Table Full of Spices',
    },
    {
      thumbnail: 'property_img/prop8.png',
      full: 'property_img/prop8.png',
      alt: 'Winter Landscape',
    },
    {
      thumbnail: 'property_img/prop9.png',
      full: 'property_img/prop9.png',
      alt: 'View of the City in the Mountains',
    },
    {
      thumbnail: 'property_img/prop10.png',
      full: 'property_img/prop10.png',
      alt: 'Place Royale Bruxelles',
    },
    
    {
      thumbnail: 'property_img/prop12.png',
      full: 'property_img/prop12.png',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'property_img/top_view.png',
      full: 'property_img/top_view.png',
      alt: 'Winter Landscape',
    },
  ];
  showNavigationArrows = false;
	showNavigationIndicators = false;
  currentImage: string = '';
  groupedImages: any[] = [];
  groupedAmenities: any[][] = [];
  @ViewChild('lightbox') lightboxModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  openLightbox(imageUrl: string) {
    this.currentImage = imageUrl;
    this.modalService.open(this.lightboxModal, { size: 'lg', centered: true });
  }
  handleKeyDown(event: KeyboardEvent, imageUrl: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openLightbox(imageUrl);
    }
  }
  ngOnInit() {
    this.groupImages();
    // this.groupedAmenities = this.chunk(this.amenities, 3);
  }

  groupImages() {
    const chunkSize = 3;
    for (let i = 0; i < this.images.length; i += chunkSize) {
      this.groupedImages.push(this.images.slice(i, i + chunkSize));
    }
  }
  chunk(arr: any[], size: number) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
  open(title: string) {
      console.log('open', title);
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.title = title;
    }
}
