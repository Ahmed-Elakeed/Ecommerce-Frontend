import { Component, OnInit } from '@angular/core';
import {TagName} from "../../../models/TagName";
import {ProductType} from "../../../models/ProductType";
import {TagNameService} from "../../../services/tag-name.service";
import {ProductTypeService} from "../../../services/product-type.service";
import {Product} from "../../../models/Product";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  tagNames:TagName[];
  productTypes:ProductType[];
  constructor(private activeLink:ActivatedRoute,private router:Router,private tagNameService:TagNameService,private productTypeService:ProductTypeService,private productService:ProductService) { }

  getAllTagName():void{
    this.tagNameService.getAllTagNames().subscribe(
      (data)=>{
        this.tagNames=data;
      }
    )
  }
  getAllProductTypes():void{
    this.productTypeService.getAllProductTypes().subscribe(
      (data)=>{
        this.productTypes=data;
      }
    )
  }
  saveProduct(){
    console.log(this.product);
    this.productService.saveProduct(this.product).subscribe(
      ()=>{
          this.router.navigateByUrl("/products");
      }
    );
  }
  ngOnInit(): void {
    this.product.productType=new ProductType();
    this.product.tagName=new TagName();
    const idIsPresent=this.activeLink.snapshot.paramMap.has('id');
    if(idIsPresent){
      const id=this.activeLink.snapshot.paramMap.get('id');
      this.productService.getProductById(id as unknown as number).subscribe(
        (data)=>{
          this.product=data;
        }
      )
    }
    this.getAllProductTypes();
    this.getAllTagName();
  }

}
