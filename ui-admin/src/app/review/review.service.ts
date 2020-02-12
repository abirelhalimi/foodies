import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Review} from './review';

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) {
  }

  getReviews(): Promise<Review[]> {
    return this.http.get('/api/reviews/')
      .toPromise()
      .then(response => response as Review[])
      .catch(this.handleError);
  }

  getReview(id: number): Promise<Review> {
    return this.http.get('/api/reviews/' + id)
      .toPromise()
      .then(response => response as Review)
      .catch(this.handleError);
  }

  updateReview(id: number, newObjectData: Review): Promise<Review> {
    return this.http.put('/api/reviews/' + id, newObjectData)
      .toPromise()
      .then(response => response as Review)
      .catch(this.handleError);
  }

  deleteReview(id: number) {
    this.http.delete('/api/reviews/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createReview(review: Review): Promise<Review> {
    return this.http.put('/api/reviews/', review)
      .toPromise()
      .then(response => response as Review)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
