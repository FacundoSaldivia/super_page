import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardHomeComponent } from './grid-card-home.component';

describe('GridCardHomeComponent', () => {
  let component: GridCardHomeComponent;
  let fixture: ComponentFixture<GridCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCardHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
