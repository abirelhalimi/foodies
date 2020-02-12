import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRatingComponent } from './create-rating.component';

describe('CreateRatingComponent', () => {
  let component: CreateRatingComponent;
  let fixture: ComponentFixture<CreateRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
