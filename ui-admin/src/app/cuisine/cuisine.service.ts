import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cuisine} from './cuisine';

@Injectable()
export class CuisineService {

  constructor(private http: HttpClient) {
  }

  getCuisines(): Promise<Cuisine[]> {
    return this.http.get('/api/cuisines/')
      .toPromise()
      .then(response => response as Cuisine[])
      .catch(this.handleError);
  }

  getCuisine(id: number): Promise<Cuisine> {
    return this.http.get('/api/cuisines/' + id)
      .toPromise()
      .then(response => response as Cuisine)
      .catch(this.handleError);
  }

  updateCuisine(id: number, newObjectData: Cuisine): Promise<Cuisine> {
    return this.http.put('/api/cuisines/' + id, newObjectData)
      .toPromise()
      .then(response => response as Cuisine)
      .catch(this.handleError);
  }

  deleteCuisine(id: number) {
    this.http.delete('/api/cuisines/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createCuisine(cuisine: Cuisine): Promise<Cuisine> {
    return this.http.put('/api/cuisines/', cuisine)
      .toPromise()
      .then(response => response as Cuisine)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
