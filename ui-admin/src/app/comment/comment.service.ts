import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from './comment';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComments(): Promise<Comment[]> {
    return this.http.get('/api/comments/')
      .toPromise()
      .then(response => response as Comment[])
      .catch(this.handleError);
  }

  getComment(id: number): Promise<Comment> {
    return this.http.get('/api/comments/' + id)
      .toPromise()
      .then(response => response as Comment)
      .catch(this.handleError);
  }

  updateComment(id: number, newObjectData: Comment): Promise<Comment> {
    return this.http.put('/api/comments/' + id, newObjectData)
      .toPromise()
      .then(response => response as Comment)
      .catch(this.handleError);
  }

  deleteComment(id: number) {
    this.http.delete('/api/comments/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createComment(comment: Comment): Promise<Comment> {
    return this.http.put('/api/comments/', comment)
      .toPromise()
      .then(response => response as Comment)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
