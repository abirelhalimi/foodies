import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DonationDetailsComponent} from './donation-details/donation-details.component';
import {CreateDonationComponent} from './create-donation/create-donation.component';
import {UpdateDonationComponent} from './update-donation/update-donation.component';
import {DonationService} from './donation.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [DonationDetailsComponent, CreateDonationComponent, UpdateDonationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DonationService]
})
export class DonationModule {
}
