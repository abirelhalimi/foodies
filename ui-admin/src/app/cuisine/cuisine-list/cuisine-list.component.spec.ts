import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineListComponent } from './cuisine-list.component';

describe('CuisineListComponent', () => {
  let component: CuisineListComponent;
  let fixture: ComponentFixture<CuisineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
