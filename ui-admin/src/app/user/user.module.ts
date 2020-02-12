import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailsComponent} from './user-details/user-details.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {UserService} from './user.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UserDetailsComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [UserService]
})
export class UserModule {
}
