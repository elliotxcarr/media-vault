import {signalStore, withState} from '@ngrx/signals'
import { initialMainSlice } from './main.slice'

export const MainStore = signalStore(
  {providedIn:'root'},
  withState(initialMainSlice)
)