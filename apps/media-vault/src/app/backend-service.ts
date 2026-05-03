// import { HttpClient } from "@angular/common/http";
 import { HttpClient } from "@angular/common/http";
import {inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly http = inject(HttpClient);

  getFilms = () => {
    return this.http.get<any>('http://localhost:3000/movies')
  }
  }
