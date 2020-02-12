import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rating} from './rating';

@Injectable()
export class RatingService {

  constructor(private http: HttpClient) {
  }

  getRatings(): Promise<Rating[]> {
    return this.http.get('/api/ratings/')
      .toPromise()
      .then(response => response as Rating[])
      .catch(this.handleError);
  }

  getRating(id: number): Promise<Rating> {
    return this.http.get('/api/ratings/' + id)
      .toPromise()
      .then(response => response as Rating)
      .catch(this.handleError);
  }

  updateRating(id: number, newObjectData: Rating): Promise<Rating> {
    return this.http.put('/api/ratings/' + id, newObjectData)
      .toPromise()
      .then(response => response as Rating)
      .catch(this.handleError);
  }

  deleteRating(id: number) {
    this.http.delete('/api/ratings/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createRating(rating: Rating): Promise<Rating> {
    return this.http.put('/api/ratings/', rating)
      .toPromise()
      .then(response => response as Rating)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
