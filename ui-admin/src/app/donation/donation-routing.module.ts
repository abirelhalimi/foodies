import {NgModule} from '@angular/core';
import {DonationDetailsComponent} from './donation-details/donation-details.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'donation/:id', component: DonationDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DonationRoutingModule {
}
