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

/**
 * Product service
 * @author Jakub Kowalewski
 */
export class ProductService {

  private http: HttpClient;


  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   *Fetches list of products from api
   * @param searchTerm
   * @returns {Observable<Product[]>}
   */
  getProductsByTerm(searchTerm: string): Observable<Product[]> {
    return this.http.get<GetProductsResponse>('https://allbest-api.herokuapp.com/api/v1/product/best/'+searchTerm)
      .pipe(map(value => {
        const products: Product[] = [];

        fetch('https://allbest-api.herokuapp.com/api/v1/product/best/'+searchTerm).then(res=>res.json()).then(data=>{
          data.forEach((product: GetProductResponse)=>{
            products.push(new Product(product.title,product.price,product.shippingFrom,product.imgSrc,product.siteLink))
          })
        })
        return products;
      }));
  }
}
