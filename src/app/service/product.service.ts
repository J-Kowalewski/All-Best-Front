import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {GetProductResponse} from "../dto/get-product-response";
import {map} from "rxjs/operators";
import {GetProductsResponse} from "../dto/get-products-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http: HttpClient;


  constructor(http: HttpClient) {
    this.http = http;
  }

  getProductsByTerm(searchTerm: string): Observable<Product[]> {
    return this.http.get<GetProductsResponse>('http://localhost:8080//api/v1/product/best/'+searchTerm)
      .pipe(map(value => {
        const products: Product[] = [];
        value.products.forEach(product=>{
          products.push(new Product(product.title,product.price,product.shippingFrom,product.imgSrc,product.siteLink))
        })
        return products;
      }));
  }

}
