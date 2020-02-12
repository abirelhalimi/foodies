import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [
  {path: 'user/:id', component: UserDetailsComponent},
  {path: 'user/update/:id', component: UpdateUserComponent},
  {path: 'user-create', component: CreateUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
