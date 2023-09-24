import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
