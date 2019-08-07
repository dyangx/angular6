import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  public items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    const pros = [{id: 1, name: '大米', price: 100}, {id: 2, name: '香蕉', price: 200}];
    let item;
    pros.forEach(i => {
      if (i.id == this.items[0]) {
        item = i;
      }
    });
    return item;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('../assets/ship.json');
  }
}
