/**
 * Movie model
 * @author Jakub Kowalewski
 */
export class Movie{
  private _title: string;
  private _year: string;
  private _genre: string;
  private _description: string;
  private _siteLink: string;

  constructor(title: string, year: string, genre: string, description: string, siteLink: string) {
    this._title = title;
    this._year = year;
    this._genre = genre;
    this._description = description;
    this._siteLink = siteLink;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get year(): string {
    return this._year;
  }

  set year(value: string) {
    this._year = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get siteLink(): string {
    return this._siteLink;
  }

  set siteLink(value: string) {
    this._siteLink = value;
  }
}
