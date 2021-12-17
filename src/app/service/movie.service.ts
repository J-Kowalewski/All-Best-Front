import {Movie} from "../model/movie";
import {GetMoviesResponse} from "../dto/get-movies-response";
import {GetMovieResponse} from "../dto/get-movie-response";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http: HttpClient;


  constructor(http: HttpClient) {
    this.http = http;
  }

  getBestMovies(): Observable<Movie[]> {
    return this.http.get<GetMoviesResponse>('http://localhost:8080//api/v1/movie/bestList')
      .pipe(map(value => {
        const movies: Movie[] = [];
        value.movies.forEach(movie=>{
          movies.push(new Movie(movie.title,movie.year,movie.genre,movie.description,movie.siteLink))
        })
        return movies;
      }));
  }
  getMovieByGenre(genre: string): Observable<Movie> {
    return this.http.get<GetMovieResponse>('http://localhost:8080//api/v1/movie/'+genre)
      .pipe(map(value => {
        const movie: Movie = new Movie(value.title, value.year, value.genre, value.description, value.siteLink);
        // movie.description = value.description;
        // movie.year=value.year;
        // movie.title=value.year;
        // movie.genre=value.genre;
        // movie.siteLink=value.siteLink;
        return movie;
      }));
  }
  getBestMovie(): Observable<Movie>{
    return this.http.get<GetMovieResponse>('http://localhost:8080//api/v1/movie/best')
      .pipe(map(value => {
        return new Movie(value.title, value.year, value.genre, value.description, value.siteLink);
      }))
  }
  getMovie(url:string): Observable<GetMovieResponse>{
    return this.http.get<GetMovieResponse>(url);
  }
}
