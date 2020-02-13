import {Component, OnInit} from '@angular/core';
import {User} from '../../user/user';
import {Router} from '@angular/router';
import {DonationService} from '../donation.service';
import {Donation} from '../donation';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.css']
})
export class CreateDonationComponent implements OnInit {

  donation: Donation = new Donation();
  submitted = false;

  constructor(private donationService: DonationService,
              private router: Router,
  ) {
  }

  ngOnInit() {
  }

  newDonation(): void {
    this.submitted = false;
    this.donation = new Donation();
  }

  save() {
    this.donationService.createDonation(this.donation)
      .then(data => console.log(data));
    this.donation = new Donation();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/donations']);
  }


}
