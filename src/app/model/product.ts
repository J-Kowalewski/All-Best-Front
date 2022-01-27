/**
 * Product model
 * @author Jakub Kowalewski
 */
export class Product{
  private _title: string;
  private _price: string;
  private _shippingFrom: string;
  private _imgSrc: string;
  private _siteLink: string;


  constructor(title: string, price: string, shippingFrom: string, imgSrc: string, siteLink: string) {
    this._title = title;
    this._price = price;
    this._shippingFrom = shippingFrom;
    this._imgSrc = imgSrc;
    this._siteLink = siteLink;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  get shippingFrom(): string {
    return this._shippingFrom;
  }

  set shippingFrom(value: string) {
    this._shippingFrom = value;
  }

  get imgSrc(): string {
    return this._imgSrc;
  }

  set imgSrc(value: string) {
    this._imgSrc = value;
  }

  get siteLink(): string {
    return this._siteLink;
  }

  set siteLink(value: string) {
    this._siteLink = value;
  }
}
