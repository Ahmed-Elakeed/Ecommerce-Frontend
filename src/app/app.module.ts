import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AddProductComponent} from "./components/product/add-product/add-product.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { TagNameComponent } from './components/tag-name/tag-name.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { AddedProductsComponent } from './components/added-products/added-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    NavbarComponent,
    TagNameComponent,
    ProductTypeComponent,
    AddedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
