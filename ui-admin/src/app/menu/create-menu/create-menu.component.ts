import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Menu} from '../menu';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menu: Menu = new Menu();
  submitted = false;

  constructor(private menuService: MenuService,
              private router: Router,
  ) {
  }

  ngOnInit() {
  }

  newMenu(): void {
    this.submitted = false;
    this.menu = new Menu();
  }

  save() {
    this.menuService.createMenu(this.menu)
      .then(data => console.log(data));
    this.menu = new Menu();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/menus']);
  }


}
