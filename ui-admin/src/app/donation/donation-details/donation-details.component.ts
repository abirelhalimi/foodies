import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Donation} from '../donation';
import {ActivatedRoute, Router} from '@angular/router';
import {DonationService} from '../donation.service';

@Component({
  selector: 'app-donation-details',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.css']
})
export class DonationDetailsComponent implements OnInit {

  private sub: Subscription;
  donation: Donation;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private donationService: DonationService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getDonation(id);
    });
  }

  private getDonation(id: number) {
    this.donationService.getDonation(id)
      .then(donation => this.donation = donation);
  }

  list() {
    this.router.navigate(['donations']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
