import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
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
}
