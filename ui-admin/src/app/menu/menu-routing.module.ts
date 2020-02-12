import {NgModule} from '@angular/core';
import {MenuDetailsComponent} from './menu-details/menu-details.component';
import {RouterModule, Routes} from '@angular/router';
import {UpdateMenuComponent} from './update-menu/update-menu.component';
import {CreateMenuComponent} from './create-menu/create-menu.component';


const routes: Routes = [
  {path: 'menu/:id', component: MenuDetailsComponent},
  {path: 'menu/update/:id', component: UpdateMenuComponent},
  {path: 'menu-create', component: CreateMenuComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
