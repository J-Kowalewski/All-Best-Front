import {Movie} from "../model/movie";
import {GetMovieResponse} from "../dto/get-movie-response";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
/**
 * Movie service
 * @author Jakub Kowalewski
 */
export class MovieService {

  private http: HttpClient;


  constructor(http: HttpClient) {
    this.http = http;
  }


  /**
   *Fetches list of best movies from api
   * @returns {Observable<Movie[]>}
   */
  getBestMovies(): Observable<Movie[]> {
    return this.http.get('https://allbest-api.herokuapp.com/api/v1/movie/bestList')
      .pipe(map(value => {
        let movies: Movie[] = [];
        fetch('https://allbest-api.herokuapp.com/api/v1/movie/bestList').then(res=>res.json()).then(data=>{
          data.forEach((movie: GetMovieResponse)=>{
            movies.push(new Movie(movie.title,movie.year,movie.genre,movie.description,movie.siteLink))
          })
        })
        return movies;
      }));
  }

  /**
   *Fetches movie by genre from api
   * @param genre
   * @returns {Observable<Movie>}
   */
  getMovieByGenre(genre: string): Observable<Movie> {
    return this.http.get<GetMovieResponse>('https://allbest-api.herokuapp.com/api/v1/movie/'+genre)
      .pipe(map(value => {
        return new Movie(value.title, value.year, value.genre, value.description, value.siteLink);
      }));
  }

  /**
   *Fetches best movie from api
   * @returns {Observable<Movie>}
   */
  getBestMovie(): Observable<Movie>{
    return this.http.get<GetMovieResponse>('https://allbest-api.herokuapp.com/api/v1/movie/best')
      .pipe(map(value => {
        return new Movie(value.title, value.year, value.genre, value.description, value.siteLink);
      }))
  }

  /**
   *Unused function that fetches movie by url from api
   * @param url
   * @returns {Observable<GetMovieResponse>}
   */
  getMovie(url:string): Observable<GetMovieResponse>{
    return this.http.get<GetMovieResponse>(url);
  }
}
