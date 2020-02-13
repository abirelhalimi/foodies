import { Component, OnInit } from '@angular/core';
import {User} from '../../user/user';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';
import {CuisineService} from '../../cuisine/cuisine.service';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();
  submitted = false;

  constructor(private recipeService: RecipeService,
              private router: Router,
              ) {
  }

  ngOnInit() {
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = new Recipe();
  }

  save() {
    this.recipeService.createRecipe(this.recipe)
      .then(data => console.log(data));
    this.recipe = new Recipe();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/recipes']);
  }


}
