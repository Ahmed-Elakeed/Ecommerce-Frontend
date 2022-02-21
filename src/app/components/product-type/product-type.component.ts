import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../models/ProductType";
import {ProductTypeService} from "../../services/product-type.service";

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  productTypes: ProductType[];
  productType: ProductType = new ProductType();
  filters={
    keyword:''
  }

  constructor(private productTypeService: ProductTypeService) {
  }

  ngOnInit(): void {
    this.getAllProductTypes();
  }

  getAllProductTypes(): void {
    this.productTypeService.getAllProductTypes().subscribe(
      (data) => {
        this.productTypes = data;
      }
    )
  }


  deleteProductTypeById(productTypeId: number): void {
    this.productTypeService.deleteProductTypeById(productTypeId).subscribe(
      () => {
        this.getAllProductTypes();
      }
    )
  }

  saveProductType(): void {
    this.productTypeService.saveProductType(this.productType).subscribe(
      () => {
        this.getAllProductTypes();
        this.productType=new ProductType();
      }
    )
  }
  filter(){
    this.productTypeService.getAllProductTypes().subscribe(
      data=>this.productTypes=this.filterExpenses(data)
    )
  }
  filterExpenses(productTypes:ProductType[]){
    return productTypes.filter((e)=>{
      return e.productType.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

  getProductTypeById(productTypeId: number):void {
    this.productTypeService.getProductTypeById(productTypeId).subscribe(
      (data)=>{
        this.productType=data;
      }
    )
  }
}
