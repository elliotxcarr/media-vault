import { Component } from '@angular/core';
import { GridWall } from './grid-wall/grid-wall';
import { SideMenu } from './side-menu/side-menu';

@Component({
  selector: 'app-home-page',
  imports: [GridWall, SideMenu],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage{
  
}
