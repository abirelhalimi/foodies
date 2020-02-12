import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes()
      .then(recipes => this.recipes = recipes);
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);

  }

}
