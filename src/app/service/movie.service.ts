import {Movie} from "../model/movie";
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
    return this.http.get('http://allbest-api.herokuapp.com/api/v1/movie/bestList')
      .pipe(map(value => {
        let movies: Movie[] = [];
        fetch('http://allbest-api.herokuapp.com/api/v1/movie/bestList').then(res=>res.json()).then(data=>{
          data.forEach((movie: GetMovieResponse)=>{
            movies.push(new Movie(movie.title,movie.year,movie.genre,movie.description,movie.siteLink))
          })
        })
        return movies;
      }));
  }
  getMovieByGenre(genre: string): Observable<Movie> {
    return this.http.get<GetMovieResponse>('http://allbest-api.herokuapp.com/api/v1/movie/'+genre)
      .pipe(map(value => {
        return new Movie(value.title, value.year, value.genre, value.description, value.siteLink);
      }));
  }
  getBestMovie(): Observable<Movie>{
    return this.http.get<GetMovieResponse>('http://allbest-api.herokuapp.com/api/v1/movie/best')
      .pipe(map(value => {
        return new Movie(value.title, value.year, value.genre, value.description, value.siteLink);
      }))
  }
  getMovie(url:string): Observable<GetMovieResponse>{
    return this.http.get<GetMovieResponse>(url);
  }
}
