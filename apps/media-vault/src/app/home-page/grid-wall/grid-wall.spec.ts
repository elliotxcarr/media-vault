import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWall } from './grid-wall';

describe('GridWall', () => {
  let component: GridWall;
  let fixture: ComponentFixture<GridWall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridWall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridWall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
