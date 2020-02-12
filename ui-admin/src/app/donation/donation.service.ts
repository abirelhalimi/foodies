import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Donation} from './donation';

@Injectable()
export class DonationService {

  constructor(private http: HttpClient) {
  }

  getDonations(): Promise<Donation[]> {
    return this.http.get('/api/donations/')
      .toPromise()
      .then(response => response as Donation[])
      .catch(this.handleError);
  }

  getDonation(id: number): Promise<Donation> {
    return this.http.get('/api/donations/' + id)
      .toPromise()
      .then(response => response as Donation)
      .catch(this.handleError);
  }

  updateDonation(id: number, newObjectData: Donation): Promise<Donation> {
    return this.http.put('/api/donations/' + id, newObjectData)
      .toPromise()
      .then(response => response as Donation)
      .catch(this.handleError);
  }

  deleteDonation(id: number) {
    this.http.delete('/api/donations/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createDonation(donation: Donation): Promise<Donation> {
    return this.http.put('/api/donations/', donation)
      .toPromise()
      .then(response => response as Donation)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
