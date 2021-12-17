import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../model/movie";

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  private _movie!: Movie;

  get movie(): Movie{
    return this._movie;
  }
  @Input()
  set movie(value: Movie) {
    this._movie = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    window.open(this._movie.siteLink, "_blank");
  }
}
