import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { DettagliProdottoComponent} from './product-details/product-details.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { CarrelloComponent } from './carrello/carrello.component';

/*definiamo delle regole di routing, ovvero delle associazioni tra path e componente */

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'prodotti/:id', component: DettagliProdottoComponent },
  { path: 'carrello', component: CarrelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
