import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//abilito il progetto a diventare un client http
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { DettagliProdottoComponent } from './product-details/product-details.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { SpedizioneComponent } from './spedizione/spedizione.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertComponent,
    DettagliProdottoComponent,
    CarrelloComponent,
    SpedizioneComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
