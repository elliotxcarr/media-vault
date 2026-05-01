import { Route } from '@angular/router';
import { HomePage } from './home-page/home-page';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomePage}
];
