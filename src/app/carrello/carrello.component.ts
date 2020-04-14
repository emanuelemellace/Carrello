import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {


  constructor(private carrelloService: CarrelloService) { }

  oggettiNelCarrello;


  ngOnInit() {
    this.oggettiNelCarrello = this.carrelloService.getCarrello();
  }

}
