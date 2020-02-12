import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Promise<User[]> {
    return this.http.get('/api/users/')
      .toPromise()
      .then(response => response as User[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    return this.http.get('/api/users/' + id)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  updateUser(id: number, newObjectData: User): Promise<User> {
    return this.http.put('/api/users/' + id, newObjectData)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  deleteUser(id: number) {
    this.http.delete('/api/users/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createUser(user: User): Promise<User> {
    return this.http.post('/api/users/', user)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
