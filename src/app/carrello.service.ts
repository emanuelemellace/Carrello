import { Injectable } from '@angular/core';

/*
I server restituiscono spesso i dati sotto forma di flusso.
Gli stream sono utili perché semplificano la trasformazione dei dati restituiti e apportano modifiche al modo in cui richiedi
tali dati. Il client HTTP di Angular, HttpClient, è un modulo intergrato per recuperare i dati dalle API esterne
e fornirli alla app come stream.
*/
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  items = [];
  constructor(private http: HttpClient) { }

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

  getCostiSpedizione() {
    return this.http.get('/assets/costiSpedizione.json');
  }
}
