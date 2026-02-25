import { Component } from '@angular/core';
import { Category } from '../models/category.models';
import { Product } from '../models/product.model';
import { ProductService } from '../services/ProductService';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [ProductListComponent, RouterOutlet] 
})
export class AppComponent {
  categories : Category[]= [];
  selectedCategoryID : number | null = null;
  selectedProducts: Product[]= [];
  constructor(private productService : ProductService ){
  this.categories= this.productService.getCategories();
  }

  selectCategory(categoryID:number){
    this.selectedCategoryID = categoryID;
    this.selectedProducts = this.productService.getProductByCategories(categoryID);
  }
  mainPage(){
    this.selectedCategoryID=null;
    this.selectedProducts=[];

  }


}