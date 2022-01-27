import { Component, OnInit } from '@angular/core';
import {Movie} from "../model/movie";
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-best-list',
  templateUrl: './best-list.component.html',
  styleUrls: ['./best-list.component.css']
})
/**
 * TypeScript class for list of best movies by IMDB
 *@author Jakub Kowalewski
 */
export class BestListComponent implements OnInit {

  private _movies!: Movie[];

  private _bestMovie!: Movie;

  get movies(): Movie[]{
    return this._movies;
  }

  private service: MovieService;

  constructor(service: MovieService) {
    this.service = service;
  }

  /**
   * On class initialization calls getBestMovies() and getBestMovie() (unused)
   */
  ngOnInit(): void {
    this.service.getBestMovies().subscribe(movies=>{
      this._movies=movies;
    })
    this.service.getBestMovie().subscribe((movie=>{
      this._bestMovie = movie;
    }))
  }

}
