import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [ProductItemComponent] 
})
 export class ProductListComponent{
    @Input() products : Product[] = [];

    removeProduct(productId: number) {
        const confirmed = window.confirm("Are you sure ?");
        if(confirmed){
            this.products = this.products.filter(p => p.id !== productId);
        }
    }




 }