import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from "./service/movie.service";
import {GetMovieResponse} from "./dto/get-movie-response";
import {Movie} from "./model/movie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'All-Best-Front';
  service: MovieService;
  bestMovie!: Movie;

  constructor(private router: Router, service:MovieService) {
    this.service= service;
  }
  movie!:GetMovieResponse;
  ngOnInit(): void {
      this.service.getBestMovie().subscribe(movie=>{
        this.bestMovie=movie;
      })
  }

  onClick() {
    if(this.router.url!="/product"){
      this.router.navigateByUrl("/product");
    }
    else{
      this.router.navigateByUrl('/genre', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/product'])
      })
    }
  }

  isHomePage(): boolean {
    return this.router.url=="/"
    }
}
