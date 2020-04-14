import { Component, OnInit } from '@angular/core';

import { Prodotto } from '../prodotto.interface';
import { prodottiDB } from '../prodottiMockup';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  prodotti: Prodotto[] = prodottiDB;

  constructor() { }

  ngOnInit() {
  }

  condividi(p:Prodotto){
    window.alert("prodotto "+ p.nome +" condiviso")
  }

  onNotify() {
    window.alert('verrai notificato quando il prodotto sarà in offerta');
  }

}
