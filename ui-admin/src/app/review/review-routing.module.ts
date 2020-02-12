import {NgModule} from '@angular/core';
import {ReviewDetailsComponent} from './review-details/review-details.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'review/:id', component: ReviewDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReviewRoutingModule {
}

