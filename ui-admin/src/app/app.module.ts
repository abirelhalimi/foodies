import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {CommentModule} from './comment/comment.module';
import {CuisineModule} from './cuisine/cuisine.module';
import {DonationModule} from './donation/donation.module';
import {MenuModule} from './menu/menu.module';
import {RatingModule} from './rating/rating.module';
import {RecipeModule} from './recipe/recipe.module';
import {RestaurantModule} from './restaurant/restaurant.module';
import {ReviewModule} from './review/review.module';
import {UserModule} from './user/user.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from '@angular/common/http';
import {UserListComponent} from './user/user-list/user-list.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserRoutingModule} from './user/user-routing.module';
import {ReviewListComponent} from './review/review-list/review-list.component';
import {RestaurantListComponent} from './restaurant/restaurant-list/restaurant-list.component';
import {ReviewRoutingModule} from './review/review-routing.module';
import {RestaurantRoutingModule} from './restaurant/restaurant-routing.module';
import {RecipeRoutingModule} from './recipe/recipe-routing.module';
import {RatingRoutingModule} from './rating/rating-routing.module';
import {MenuRoutingModule} from './menu/menu-routing.module';
import {DonationRoutingModule} from './donation/donation-routing.module';
import {CuisineRoutingModule} from './cuisine/cuisine-routing.module';
import {CommentRoutingModule} from './comment/comment-routing.module';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component';
import {RatingListComponent} from './rating/rating-list/rating-list.component';
import {MenuListComponent} from './menu/menu-list/menu-list.component';
import {DonationListComponent} from './donation/donation-list/donation-list.component';
import {CuisineListComponent} from './cuisine/cuisine-list/cuisine-list.component';
import {CommentListComponent} from './comment/comment-list/comment-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavbarComponent,
    UserListComponent,
    DashboardComponent,
    ReviewListComponent,
    RestaurantListComponent,
    RecipeListComponent,
    RatingListComponent,
    MenuListComponent,
    DonationListComponent,
    CuisineListComponent,
    CommentListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommentModule,
    CuisineModule,
    DonationModule,
    MenuModule,
    RatingModule,
    RecipeModule,
    RestaurantModule,
    ReviewModule,
    UserModule,
    HttpClientModule,
    AppRoutingModule,
    UserRoutingModule,
    ReviewRoutingModule,
    RestaurantRoutingModule,
    RecipeRoutingModule,
    RatingRoutingModule,
    MenuRoutingModule,
    DonationRoutingModule,
    CuisineRoutingModule,
    CommentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
