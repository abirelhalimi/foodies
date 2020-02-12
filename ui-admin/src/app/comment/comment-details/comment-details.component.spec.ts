import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailsComponent } from './comment-details.component';

describe('CommentDetailsComponent', () => {
  let component: CommentDetailsComponent;
  let fixture: ComponentFixture<CommentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
