import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {AddProductComponent} from "./components/product/add-product/add-product.component";
import {TagNameComponent} from "./components/tag-name/tag-name.component";
import {ProductTypeComponent} from "./components/product-type/product-type.component";
import {AddedProductsComponent} from "./components/added-products/added-products.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/products',
    pathMatch:'full'
  },
  {
    path:'products',
    component:ProductComponent
  },
  {
    path:'add-product',
    component:AddProductComponent
  },
  {
    path:'edit-product/:id',
    component:AddProductComponent
  },
  {
    path:'tag-names',
    component:TagNameComponent
  },
  {
    path:'product-types',
    component:ProductTypeComponent
  },
  {
    path:'added-products',
    component:AddedProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
