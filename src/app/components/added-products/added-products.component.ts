import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/Product";

@Component({
  selector: 'app-added-products',
  templateUrl: './added-products.component.html',
  styleUrls: ['./added-products.component.css']
})
export class AddedProductsComponent implements OnInit {
  addedProducts:Product[]=[];
  constructor() { }
  ngOnInit(): void {
    this.addedProducts=JSON.parse(<string>sessionStorage.getItem('list'));
    console.log(this.addedProducts);
  }

  deleteAddedProductById(productId?: number) {
    for(let i=0;i<this.addedProducts.length;i++){
      if(this.addedProducts[i].productId==productId){
        delete this.addedProducts[i];
      }
    }
  }
  clearList() {
    sessionStorage.removeItem("list");
    this.ngOnInit();
  }
}
