import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Comment} from '../comment';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  private sub: Subscription;
  comment: Comment;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private commentService: CommentService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getComment(id);
    });
  }

  private getComment(id: number) {
    this.commentService.getComment(id)
      .then(comment => this.comment = comment);
  }

  list() {
    this.router.navigate(['comments']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
