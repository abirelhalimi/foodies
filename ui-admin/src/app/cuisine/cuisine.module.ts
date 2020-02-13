import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CuisineDetailsComponent} from './cuisine-details/cuisine-details.component';
import {CreateCuisineComponent} from './create-cuisine/create-cuisine.component';
import {UpdateCuisineComponent} from './update-cuisine/update-cuisine.component';
import {CuisineService} from './cuisine.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CuisineDetailsComponent, CreateCuisineComponent, UpdateCuisineComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CuisineService]
})
export class CuisineModule {
}
