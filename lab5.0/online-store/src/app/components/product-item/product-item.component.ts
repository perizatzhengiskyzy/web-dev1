import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from './../../models/product.model'
@Component({
    selector:'app-product-item',
    styleUrl:'product-item.component.css',
    templateUrl:'product-item.component.html'
})
export class ProductItemComponent{
    @Input() product !: Product;
    @Output() delete = new EventEmitter<number>();

    mainImage!: string;    
    currentImageIndex: number = 0;

    setMainImage(image: string) {
    const index = this.product.images.indexOf(image);
    if (index !== -1) {
      this.currentImageIndex = index;
      this.product.image = image;
    }
  }
    prevImage(event: Event){
        const newIndex = this.currentImageIndex>0 ? 
        this.currentImageIndex - 1: this.product.images.length -1;
        this.currentImageIndex = newIndex;
        this.product.image=this.product.image[newIndex];
    }
    nextImage(event: Event) {
    const newIndex = this.currentImageIndex < this.product.images.length - 1 
      ? this.currentImageIndex + 1 
      : 0;
    this.currentImageIndex = newIndex;
    this.product.image = this.product.images[newIndex];
  }

    likeProduct(): void{
        this.product.likes++;
    }
    deleteProduct( ):void{
        this.delete.emit(this.product.id);
    }
    shareWhatsApp():void{
        const text = `Смотри этот продукт ${this.product.name}`;
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        window.open(url,'_blank');
    }
    shareTelegram(): void{
        const text = `Смотри этот продукт ${this.product.name}`;
        const url = `https://t.me/share/url?url=${encodeURIComponent(text)}`
        window.open(url, 'blank');
    }



}