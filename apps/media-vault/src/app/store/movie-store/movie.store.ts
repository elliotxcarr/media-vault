import { signalStore, withComputed, withProps, withState } from "@ngrx/signals";
import { initialMovieSlice, Movie } from "./movie.slice";
import { BackendService } from "../../backend-service";
import { inject } from "@angular/core";
import {toSignal} from '@angular/core/rxjs-interop'

export const MovieStore = signalStore(
  {providedIn: 'root'},
  withProps(() => ({
    _beService: inject(BackendService),
    
  })),
  withComputed(store => ({
    movies: toSignal(
      store._beService.getFilms(),
      { initialValue: [] as Movie[] }
    ),
  })),
  withState(initialMovieSlice),
)