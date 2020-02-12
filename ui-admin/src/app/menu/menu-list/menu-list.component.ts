import {Component, OnInit} from '@angular/core';
import {Menu} from '../menu';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus()
      .then(menus => this.menus = menus);
  }

  deleteMenu(id: number) {
    this.menuService.deleteMenu(id);
  }

}
