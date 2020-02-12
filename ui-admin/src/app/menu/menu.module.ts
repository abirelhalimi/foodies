import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuDetailsComponent} from './menu-details/menu-details.component';
import {CreateMenuComponent} from './create-menu/create-menu.component';
import {UpdateMenuComponent} from './update-menu/update-menu.component';
import {MenuService} from './menu.service';


@NgModule({
  declarations: [MenuDetailsComponent, CreateMenuComponent, UpdateMenuComponent],
  imports: [
    CommonModule
  ],
  providers: [MenuService]
})
export class MenuModule {
}
