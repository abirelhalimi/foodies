import {NgModule} from '@angular/core';
import {CommentDetailsComponent} from './comment-details/comment-details.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'comment/:id', component: CommentDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CommentRoutingModule {
}
