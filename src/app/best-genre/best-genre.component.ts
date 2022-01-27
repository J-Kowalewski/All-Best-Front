import { Component, OnInit } from '@angular/core';
import {Movie} from "../model/movie";
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-best-genre',
  templateUrl: './best-genre.component.html',
  styleUrls: ['./best-genre.component.css']
})
/**
 * TypeScript class for best movies from every genre by FILMWEB
 * @author Jakub Kowalewski
 */
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

  /**
   * On class initialization calls getMoviesByGenre()
   */
  ngOnInit(): void {

    this.service.getMoviesByGenre().subscribe(movies=>{
      this._movies=movies;
    })

    this.initialized = true;
  }

}
