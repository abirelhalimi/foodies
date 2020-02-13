import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {UpdateRecipeComponent} from './update-recipe/update-recipe.component';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {RecipeService} from './recipe.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [RecipeDetailsComponent, UpdateRecipeComponent, CreateRecipeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [RecipeService]
})
export class RecipeModule {
}
