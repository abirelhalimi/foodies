import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Menu} from '../menu';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  private sub: Subscription;
  menu: Menu;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private menuService: MenuService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getMenu(id);
    });
  }

  private getMenu(id: number) {
    this.menuService.getMenu(id)
      .then(menu => this.menu = menu);
  }

  list() {
    this.router.navigate(['menus']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
