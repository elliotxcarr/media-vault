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

  ngOnInit(): void {
    this.beService.getFilms().subscribe({
      next: (movies) => this.data = movies,
      error: (err) => console.error(err)
    });
  }


}
