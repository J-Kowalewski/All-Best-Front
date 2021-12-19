import { Component, OnInit } from '@angular/core';
import {Movie} from "../model/movie";
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-best-genre',
  templateUrl: './best-genre.component.html',
  styleUrls: ['./best-genre.component.css']
})
export class BestGenreComponent implements OnInit {

  private service: MovieService;
  private _movies: Movie[] =[];

  get movies(): Movie[]{
    return this._movies;
  }

  initialized: boolean = false;

  constructor(service: MovieService) {
    this.service = service;
  }

  ngOnInit(): void {

    this.service.getMovieByGenre("ACTION").subscribe(movie=>{
      this.movies.push(movie)
    });
    this.service.getMovieByGenre("COMEDY").subscribe(movie=>{
      this.movies.push(movie)
    });
    this.service.getMovieByGenre("THRILLER").subscribe(movie=>{
      this.movies.push(movie)
    });
    // this.service.getMovieByGenre("CRIMINAL").subscribe(movie=>{
    //   this._criminalMovie= movie;
    // });
    this.service.getMovieByGenre("FANTASY").subscribe(movie=>{
      this.movies.push(movie)
    });
    this.service.getMovieByGenre("ANIMATION").subscribe(movie=>{
      this.movies.push(movie)
    });
    this.service.getMovieByGenre("DRAMA").subscribe(movie=>{
      this.movies.push(movie)
    });
    this.service.getMovieByGenre("SCI_FI").subscribe(movie=>{
      this.movies.push(movie)
    });
    this.service.getMovieByGenre("HORROR").subscribe(movie=>{
      this.movies.push(movie)
    });
    this.initialized = true;
  }

}
