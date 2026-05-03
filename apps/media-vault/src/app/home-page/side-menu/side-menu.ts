import { Component, inject } from '@angular/core';
import { MainStore } from '../../store/main-store/main.store';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {
  readonly _mainStore = inject(MainStore);
}
