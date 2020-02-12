import {Component, OnInit} from '@angular/core';
import {Donation} from '../donation';
import {DonationService} from '../donation.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  donations: Donation[];

  constructor(private donationService: DonationService) {
  }

  ngOnInit() {
    this.getDonations();
  }

  getDonations() {
    this.donationService.getDonations()
      .then(donations => this.donations = donations);
  }

  deleteDonation(id: number) {
    this.donationService.deleteDonation(id);
  }

}
