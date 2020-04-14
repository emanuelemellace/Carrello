import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  items = [];
  constructor() { }

  aggiungiAlCarrello(product) {
    this.items.push(product);
  }

  getCarrello() {
    return this.items;
  }

  clearCarrello() {
    this.items = [];
    return this.items;
  }
}
