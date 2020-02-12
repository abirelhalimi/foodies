import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private sub: Subscription;
  user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getUser(id);
    });
  }

  private getUser(id: number) {
    this.userService.getUser(id)
      .then(user => this.user = user);
  }

  list() {
    this.router.navigate(['users']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
