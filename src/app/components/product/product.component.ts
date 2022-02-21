import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  addedProducts: Product[] = [];
  product: Product = new Product();
  filters = {
    lowCost: 0,
    topCost: 0
  }

  constructor(private productService: ProductService) {
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      }
    )
  }

  deleteProductById(id: number): void {
    this.productService.deleteProduct(id).subscribe((response) => {
      console.log(response)
      this.getAllProducts();
    }, (error) => {
      console.log(error);
    })
  }

  addToCart(productId: number) {
    this.productService.getProductById(productId).subscribe(
      (data) => {
        this.product = data;
      }
    )
    this.addedProducts.push(this.product);
    sessionStorage.setItem('list', JSON.stringify(this.addedProducts));
  }

  filter() {
    this.productService.getAllProducts().subscribe(
      data => this.products = this.filterProducts(data)
    )
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private filterProducts(data: Product[]) {
    return data.filter((p) => {
      return p.productPrice >= this.filters.lowCost && p.productPrice <= this.filters.topCost
    })
  }
}
