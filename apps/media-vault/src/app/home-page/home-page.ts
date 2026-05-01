import { Component, inject, OnInit } from '@angular/core';
import { BackendService } from '../backend-service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  readonly beService = inject(BackendService);

  data: any = []

  async getFilms(){
    const movies: any = (this.beService.getFilms()).subscribe(data => console.log(data));
    this.data = movies
    console.log(movies)
  }

  ngOnInit(): void {
    this.getFilms()
  }


}
