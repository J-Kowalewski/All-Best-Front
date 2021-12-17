import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";
import {Movie} from "../model/movie";

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrls: ['./best-product.component.css']
})
export class BestProductComponent implements OnInit {

  private _products!: Product[];
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

  ngOnInit(): void {
    this.service.getProductsByTerm(this._searchTerm).subscribe(products=>{
      this._products=products;
    })
  }

}
