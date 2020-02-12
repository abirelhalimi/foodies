import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CuisineDetailsComponent} from './cuisine-details/cuisine-details.component';
import {UpdateCuisineComponent} from './update-cuisine/update-cuisine.component';
import {CreateCuisineComponent} from './create-cuisine/create-cuisine.component';

const routes: Routes = [
  {path: 'cuisine/:id', component: CuisineDetailsComponent},
  {path: 'cuisine/update/:id', component: UpdateCuisineComponent},
  {path: 'cuisine-create', component: CreateCuisineComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CuisineRoutingModule {
}
