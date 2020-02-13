import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentDetailsComponent} from './comment-details/comment-details.component';
import {CreateCommentComponent} from './create-comment/create-comment.component';
import {UpdateCommentComponent} from './update-comment/update-comment.component';
import {CommentService} from './comment.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CommentDetailsComponent, CreateCommentComponent, UpdateCommentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CommentService]
})
export class CommentModule {
}
