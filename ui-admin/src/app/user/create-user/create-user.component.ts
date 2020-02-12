import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {CuisineService} from '../../cuisine/cuisine.service';
import {Cuisine} from '../../cuisine/cuisine';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  cuisines: Cuisine[];
  chosen = [];

  constructor(private userService: UserService,
              private router: Router,
              private cuisineService: CuisineService) {
  }

  ngOnInit() {
    this.cuisineService.getCuisines()
      .then(cuisines => this.cuisines = cuisines);
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user)
      .then(data => console.log(data));
    this.user = new User();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/users']);
  }

}
