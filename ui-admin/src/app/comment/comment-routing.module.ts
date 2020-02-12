import {NgModule} from '@angular/core';
import {CommentDetailsComponent} from './comment-details/comment-details.component';
import {RouterModule, Routes} from '@angular/router';
import {UpdateCommentComponent} from './update-comment/update-comment.component';
import {CreateCommentComponent} from './create-comment/create-comment.component';


const routes: Routes = [
  {path: 'comment/:id', component: CommentDetailsComponent},
  {path: 'comment/update/:id', component: UpdateCommentComponent},
  {path: 'comment-create', component: CreateCommentComponent},
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
