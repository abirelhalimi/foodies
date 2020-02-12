import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecipeComponent } from './update-recipe.component';

describe('UpdateRecipeComponent', () => {
  let component: UpdateRecipeComponent;
  let fixture: ComponentFixture<UpdateRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
