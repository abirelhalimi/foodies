import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDetailsComponent } from './donation-details.component';

describe('DonationDetailsComponent', () => {
  let component: DonationDetailsComponent;
  let fixture: ComponentFixture<DonationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
