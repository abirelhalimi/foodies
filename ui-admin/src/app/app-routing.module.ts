import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user/user-list/user-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReviewListComponent} from './review/review-list/review-list.component';
import {RestaurantListComponent} from './restaurant/restaurant-list/restaurant-list.component';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component';
import {RatingListComponent} from './rating/rating-list/rating-list.component';
import {MenuListComponent} from './menu/menu-list/menu-list.component';
import {DonationListComponent} from './donation/donation-list/donation-list.component';
import {CuisineListComponent} from './cuisine/cuisine-list/cuisine-list.component';
import {CommentListComponent} from './comment/comment-list/comment-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'reviews', component: ReviewListComponent, canActivate: [AuthGuard]},
  {path: 'restaurants', component: RestaurantListComponent, canActivate: [AuthGuard]},
  {path: 'recipes', component: RecipeListComponent, canActivate: [AuthGuard]},
  {path: 'ratings', component: RatingListComponent, canActivate: [AuthGuard]},
  {path: 'menus', component: MenuListComponent, canActivate: [AuthGuard]},
  {path: 'donations', component: DonationListComponent, canActivate: [AuthGuard]},
  {path: 'cuisines', component: CuisineListComponent, canActivate: [AuthGuard]},
  {path: 'comments', component: CommentListComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
