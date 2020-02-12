import {NgModule} from '@angular/core';
import {MenuDetailsComponent} from './menu-details/menu-details.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'menu/:id', component: MenuDetailsComponent},
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
