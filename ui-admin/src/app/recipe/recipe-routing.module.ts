import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';

const routes: Routes = [
  {path: 'recipe/:id', component: RecipeDetailsComponent},
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
