import {Component, OnInit} from '@angular/core';
import {User} from '../../user/user';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';
import {CuisineService} from '../../cuisine/cuisine.service';
import {Comment} from '../comment';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  comment: Comment = new Comment();
  submitted = false;

  constructor(private commentService: CommentService,
              private router: Router,
              ) {
  }

  ngOnInit() {
  }

  newComment(): void {
    this.submitted = false;
    this.comment = new Comment();
  }

  save() {
    this.commentService.createComment(this.comment)
      .then(data => console.log(data));
    this.comment = new Comment();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/comments']);
  }


}
