import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';


import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  checkoutForm;

  oggettiNelCarrello;


  /*form builder crea un oggetto json group identificato da nome e indirizzo che verranno
  riempiti dal valore che passo nel form
  es. { nome: "emanuele" , indirizzo: "via Roma" }
  */
  constructor(private carrelloService: CarrelloService,  private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      nome: '',
      indirizzo: ''
    });
   }

  ngOnInit() {
    this.oggettiNelCarrello = this.carrelloService.getCarrello();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.oggettiNelCarrello = this.carrelloService.clearCarrello();
    this.checkoutForm.reset();

    console.warn('il tuo ordine è andato a buon fine', customerData);
  }

}
