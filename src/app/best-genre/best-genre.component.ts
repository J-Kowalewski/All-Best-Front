import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../model/movie";
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-best-genre',
  templateUrl: './best-genre.component.html',
  styleUrls: ['./best-genre.component.css']
})
export class BestGenreComponent implements OnInit {

  private service: MovieService;

  _actionMovie!: Movie;
  _comedyMovie!: Movie;
  _thrillerMovie!: Movie;
  _criminalMovie!: Movie;
  _fantasyMovie!: Movie;
  _animationMovie!: Movie;
  _dramaMovie!: Movie;
  _sciFiMovie!: Movie;
  _horrorMovie!: Movie;

  constructor(service: MovieService) {
    this.service = service;
  }

  ngOnInit(): void {
    // this.service.getBestMovie().subscribe(movie=>{
    //   this._comedyMovie=movie;
    //   this._actionMovie=movie;
    //   this._thrillerMovie=movie;
    //   this._criminalMovie=movie;
    //   this._fantasyMovie=movie;
    //   this._animationMovie=movie;
    //   this._dramaMovie=movie;
    //   this._sciFiMovie=movie;
    //   this._horrorMovie=movie;
    // })
    this.service.getMovieByGenre("ACTION").subscribe(movie=>{
      this._actionMovie = movie;
    });
    this.service.getMovieByGenre("COMEDY").subscribe(movie=>{
      this._comedyMovie= movie;
    });
    this.service.getMovieByGenre("THRILLER").subscribe(movie=>{
      this._thrillerMovie= movie;
    });
    this.service.getMovieByGenre("CRIMINAL").subscribe(movie=>{
      this._criminalMovie= movie;
    });
    this.service.getMovieByGenre("FANTASY").subscribe(movie=>{
      this._fantasyMovie = movie;
    });
    this.service.getMovieByGenre("ANIMATION").subscribe(movie=>{
      this._animationMovie = movie;
    });
    this.service.getMovieByGenre("DRAMA").subscribe(movie=>{
      this._dramaMovie= movie;
    });
    this.service.getMovieByGenre("SCI_FI").subscribe(movie=>{
      this._sciFiMovie= movie;
    });
    this.service.getMovieByGenre("HORROR").subscribe(movie=>{
      this._horrorMovie= movie;
    });
  }

}
