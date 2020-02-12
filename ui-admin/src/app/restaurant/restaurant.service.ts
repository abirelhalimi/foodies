import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from './restaurant';

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

  getRestaurants(): Promise<Restaurant[]> {
    return this.http.get('/api/restaurants/')
      .toPromise()
      .then(response => response as Restaurant[])
      .catch(this.handleError);
  }

  getRestaurant(id: number): Promise<Restaurant> {
    return this.http.get('/api/restaurants/' + id)
      .toPromise()
      .then(response => response as Restaurant)
      .catch(this.handleError);
  }

  updateRestaurant(id: number, newObjectData: Restaurant): Promise<Restaurant> {
    return this.http.put('/api/restaurants/' + id, newObjectData)
      .toPromise()
      .then(response => response as Restaurant)
      .catch(this.handleError);
  }

  deleteRestaurant(id: number) {
    this.http.delete('/api/restaurants/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return this.http.put('/api/restaurants/', restaurant)
      .toPromise()
      .then(response => response as Restaurant)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
