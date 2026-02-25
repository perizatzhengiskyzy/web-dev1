import  {categories} from '../category/categories';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.models';
import { products } from '../data/products.data';
@Injectable({
  providedIn: 'root'
})
export class ProductService{
    getCategories(): Category[]{
        return categories;
    }
    getProducts():Product[]{
        return products;
    }
    getProductByCategories(categoryId: number):Product[]{
        return products.filter(p=> p.categoryId==categoryId);
    }
}