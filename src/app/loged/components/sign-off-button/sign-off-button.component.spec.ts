import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOffButtonComponent } from './sign-off-button.component';

describe('SignOffButtonComponent', () => {
  let component: SignOffButtonComponent;
  let fixture: ComponentFixture<SignOffButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignOffButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOffButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
