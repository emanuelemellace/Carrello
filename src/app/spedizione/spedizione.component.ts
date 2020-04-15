import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';

/* questo componente mostra i costi di spedizione di un prodotto
i costi sono passati tramite http in un file json  e ottenuti tramite il servizio carrelloService */
@Component({
  selector: 'app-spedizione',
  templateUrl: './spedizione.component.html',
  styleUrls: ['./spedizione.component.css']
})
export class SpedizioneComponent implements OnInit {

  costiSpedizione;

  constructor( private carrelloService: CarrelloService) { }

  ngOnInit() {
    this.costiSpedizione = this.carrelloService.getCostiSpedizione();
  }

}
