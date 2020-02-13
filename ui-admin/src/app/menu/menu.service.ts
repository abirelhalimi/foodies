import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from './menu';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) {
  }

  getMenus(): Promise<Menu[]> {
    return this.http.get('/api/menus/')
      .toPromise()
      .then(response => response as Menu[])
      .catch(this.handleError);
  }

  getMenu(id: number): Promise<Menu> {
    return this.http.get('/api/menus/' + id)
      .toPromise()
      .then(response => response as Menu)
      .catch(this.handleError);
  }

  updateMenu(id: number, newObjectData: Menu): Promise<Menu> {
    return this.http.put('/api/menus/' + id, newObjectData)
      .toPromise()
      .then(response => response as Menu)
      .catch(this.handleError);
  }

  deleteMenu(id: number) {
    this.http.delete('/api/menus/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createMenu(menu: Menu): Promise<Menu> {
    return this.http.put('/api/menus/', menu)
      .toPromise()
      .then(response => response as Menu)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
