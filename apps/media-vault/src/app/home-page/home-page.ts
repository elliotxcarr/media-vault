import { Component, inject } from '@angular/core';
import { BackendService } from '../backend-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [AsyncPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage{
  readonly beService = inject(BackendService);
  movies$ = this.beService.getFilms();

}
