import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {Product} from "../model/product";

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
/**
 * TypeScript class for one product
 * @author Jakub Kowalewski
 */
export class DisplayProductComponent implements OnInit {

  private _product!: Product;

  get product(): Product{
    return this._product;
  }
  @Input()
  set product(value: Product) {
    this._product = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Opens product site in a separate window
   */
  btnClick() {
    window.open(this._product.siteLink, "_blank");
  }
}
