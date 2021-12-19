import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrls: ['./best-product.component.css']
})
export class BestProductComponent implements OnInit {

  private _products: Product[] = [];
  private _searchTerm!: string;

  get products(): Product[]{
    return this._products;
  }
  @Input()
  set searchTerm(value: string) {
    this._searchTerm = value;
  }
  private service: ProductService;

  constructor(service: ProductService) {
    this.service = service;
  }

  public ngOnInit(): void {
    const input = <HTMLInputElement> document.getElementById("product_id");
    if(input.value.toString().length>0){
      this.service.getProductsByTerm(input.value).subscribe(products=>{
        this._products=products;
      })
    }

  }
}
