import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {BestProductComponent} from "./best-product/best-product.component";
import {MovieService} from "./service/movie.service";
import {GetMovieResponse} from "./dto/get-movie-response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'All-Best-Front';
  service: MovieService;
  constructor(private router: Router, service:MovieService) {
    this.service= service;
  }
  movie!:GetMovieResponse;
  ngOnInit(): void {
    this.service.getMovie("http://localhost:8080//api/v1/movie/best").subscribe(value => {
      this.movie=value;
      console.log(value);
    })
  }
}
