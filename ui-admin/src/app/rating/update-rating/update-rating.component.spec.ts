import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRatingComponent } from './update-rating.component';

describe('UpdateRatingComponent', () => {
  let component: UpdateRatingComponent;
  let fixture: ComponentFixture<UpdateRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
