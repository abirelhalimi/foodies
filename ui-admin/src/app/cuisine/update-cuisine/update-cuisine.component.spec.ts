import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCuisineComponent } from './update-cuisine.component';

describe('UpdateCuisineComponent', () => {
  let component: UpdateCuisineComponent;
  let fixture: ComponentFixture<UpdateCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
