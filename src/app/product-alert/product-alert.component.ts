import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import {Prodotto} from '../prodotto.interface';

/* il componente controlla il prezzo del prodotto, e se il prezzo è più grande di 700,
mostra un bottone "Tienimi aggiornato" che permette agli utenti di ricevere una notifica quando il
prodotto è in saldo.
prende in input un prodotto per controllarlo e mostrare il bottone
manda in output un evento quanto i valore del prodotto cambia e quindi è in offerta
*/

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() prodottoAlert:Prodotto;

  @Output() notifica = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
