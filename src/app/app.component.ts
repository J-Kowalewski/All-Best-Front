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
/**
 * Main angular component
 * @author Jakub Kowalewski
 */
export class AppComponent implements OnInit{
  title = 'All-Best-Front';
  service: MovieService;
  bestMovie!: Movie;
  movie!:GetMovieResponse;

  constructor(private router: Router, service:MovieService) {
    this.service= service;
  }

  ngOnInit(): void {
      this.service.getBestMovie().subscribe(movie=>{
        this.bestMovie=movie;
      })
  }

  /**
   *Opens product page or reloads the page with given params
   */
  onClick() {
    const input = <HTMLInputElement> document.getElementById("product_id");
    if(input.value.length!=0) {
      if (this.router.url != "/product") {
        this.router.navigateByUrl("/product");
      } else {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/product'])
        })
      }
    }
  }

  /**
   * Checks if user is on home page
   * @returns {boolean}
   */
  isHomePage(): boolean {
    return this.router.url=="/"
    }

  /**
   * Opens best movie in separate window
   */
  btnClick() {
    window.open(this.bestMovie.siteLink, "_blank");
  }
}
