import {ProductType} from "./ProductType";
import {TagName} from "./TagName";

export class Product{
  public productId:number;
  public productName:string;
  public productPrice:number;
  public productColor:string;
  public available:boolean;
  public productType:ProductType;
  public tagName:TagName;

}
