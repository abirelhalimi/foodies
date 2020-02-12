import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentDetailsComponent} from './comment-details/comment-details.component';
import {CreateCommentComponent} from './create-comment/create-comment.component';
import {UpdateCommentComponent} from './update-comment/update-comment.component';
import {CommentService} from './comment.service';


@NgModule({
  declarations: [CommentDetailsComponent, CreateCommentComponent, UpdateCommentComponent],
  imports: [
    CommonModule
  ],
  providers: [CommentService]
})
export class CommentModule {
}
