import { Component, inject} from '@angular/core';
import { MovieStore } from '../../store/movie-store/movie.store';

@Component({
  selector: 'app-grid-wall',
  imports: [],
  templateUrl: './grid-wall.html',
  styleUrl: './grid-wall.css',
})
export class GridWall {
  readonly _movieStore = inject(MovieStore);

}
