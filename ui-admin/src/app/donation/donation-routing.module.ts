import {NgModule} from '@angular/core';
import {DonationDetailsComponent} from './donation-details/donation-details.component';
import {RouterModule, Routes} from '@angular/router';
import {UpdateDonationComponent} from './update-donation/update-donation.component';
import {CreateDonationComponent} from './create-donation/create-donation.component';


const routes: Routes = [
  {path: 'donation/:id', component: DonationDetailsComponent},
  {path: 'donation/update/:id', component: UpdateDonationComponent},
  {path: 'donation-create', component: CreateDonationComponent},
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
