// import { HttpClient } from "@angular/common/http";
 import { HttpClient } from "@angular/common/http";
import {inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly http = inject(HttpClient);

  getFilms = () => {
    return this.http.get<any>('http://localhost:3000/api/movies')
  }
  //   console.log('in getfilms')
  //   try {
  //     const response = await fetch('https://api.imdbapi.dev/titles');
  //     console.log(response)
  //     if(!response.ok){
  //       throw new Error('error')
  //     }
  //     const data = await response.json()
  //     return data.titles
  //   }
  //   catch (err) {
  //     console.error(err)
  //   }
  }
