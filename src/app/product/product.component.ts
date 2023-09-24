import { Component } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  title: string = 'Product List';
  color='red';
  affiche= true;  
  products: Product[] = [
  {id:'1',name:'iphone',price:1000,quantity:0,category:{id:'1',type:'phone'},like:0},
  {id:'2',name:'iphone',price:2000,quantity:2,category:{id:'3',type:'phone'},like:0}
];
  buy(p:Product){
   p.quantity--;
  }

  getColor(){
    return this.color;
  }
  like(p:Product){
    p.like++;
  }
}


