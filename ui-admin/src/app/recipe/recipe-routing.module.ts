import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {UpdateRecipeComponent} from './update-recipe/update-recipe.component';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';

const routes: Routes = [
  {path: 'recipe/:id', component: RecipeDetailsComponent},
  {path: 'recipe/update/:id', component: UpdateRecipeComponent},
  {path: 'recipe-create', component: CreateRecipeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class RecipeRoutingModule {
}
