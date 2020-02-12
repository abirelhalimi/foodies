import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CuisineDetailsComponent} from './cuisine-details/cuisine-details.component';

const routes: Routes = [
  {path: 'cuisine/:id', component: CuisineDetailsComponent},
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
