import {Component, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments()
      .then(comments => this.comments = comments);
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id);
  }

}
