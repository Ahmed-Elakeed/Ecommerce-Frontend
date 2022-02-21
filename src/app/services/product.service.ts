import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `http://localhost:8080/product`;

  constructor(private http: HttpClient) {
  }


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
