import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../models/ProductType";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private url = 'http://localhost:8080/productType';

  constructor(private http: HttpClient) {
  }

  getAllProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${this.url}`);
  }

  getProductTypeById(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.url}/${id}`);
  }

  saveProductType(productType: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(`${this.url}`, productType);
  }

  updateProductType(id: number, productType: ProductType): Observable<ProductType> {
    return this.http.put<ProductType>(`${this.url}/${id}`, productType);
  }

  deleteProductTypeById(id: number): Observable<ProductType> {
    return this.http.delete<ProductType>(`${this.url}/${id}`);
  }
}
