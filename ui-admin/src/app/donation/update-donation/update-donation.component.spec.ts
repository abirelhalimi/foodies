import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonationComponent } from './update-donation.component';

describe('UpdateDonationComponent', () => {
  let component: UpdateDonationComponent;
  let fixture: ComponentFixture<UpdateDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
