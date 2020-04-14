import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {Prodotto} from '../prodotto.interface';
import { prodottiDB } from '../prodottiMockup';
import { CarrelloService } from '../carrello.service';

/* QUANDO  REINDERIZZO IL COMPONENTE AVRO' COME URL /prodotti/:id
  quello che farà il compoente è prelevare l'informazione id dall'URL e da
  essa ottenere il prodotto che corrisponde a quell'id da prodottiDB */

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class DettagliProdottoComponent implements OnInit {

  prodottoSelezionato: Prodotto;

  // route contiene informazioni sul percorso, i suoi parametri e dati aggiuntivi associati al percorso.
  constructor( private route: ActivatedRoute, private carrelloService: CarrelloService ) { }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
     this.prodottoSelezionato = prodottiDB[+params.get('id') - 1];
     /*il prodotto Selezionato sarà quello definito nella posizione id nell'array prodottiDB
     -il simbolo + fa il casting tra stringa e intero
     -params.get('id') prende la stringa che corrisponde all'attributo id= '' nell URL*/
  });
  }

  addToCart(product) {
    this.carrelloService.aggiungiAlCarrello(product);
    window.alert('il prodotto '+product.nome+' è stato aggiunto al carrello');
  }

}
