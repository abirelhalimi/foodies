import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {UpdateRecipeComponent} from './update-recipe/update-recipe.component';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {RecipeService} from './recipe.service';


@NgModule({
  declarations: [RecipeDetailsComponent, UpdateRecipeComponent, CreateRecipeComponent],
  imports: [
    CommonModule
  ],
  providers: [RecipeService]
})
export class RecipeModule {
}
