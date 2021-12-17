import { Component, OnInit } from '@angular/core';
import {Movie} from "../model/movie";
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-best-list',
  templateUrl: './best-list.component.html',
  styleUrls: ['./best-list.component.css']
})
export class BestListComponent implements OnInit {

  private _movies!: Movie[];

  get movies(): Movie[]{
    return this._movies;
  }

  private service: MovieService;

  constructor(service: MovieService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.getBestMovies().subscribe(movies=>{
      this._movies=movies;
    })
  }

}
