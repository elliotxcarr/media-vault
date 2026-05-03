// import { HttpClient } from "@angular/common/http";
 import { HttpClient } from "@angular/common/http";
import {inject, Injectable } from "@angular/core";
import { Movie } from "./store/movie-store/movie.slice";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly http = inject(HttpClient);

  getFilms = () => {
    return this.http.get<Movie[]>('http://localhost:3000/movies')
  }
  }
