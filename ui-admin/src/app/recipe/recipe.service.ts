import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from './recipe';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  getRecipes(): Promise<Recipe[]> {
    return this.http.get('/api/recipes/')
      .toPromise()
      .then(response => response as Recipe[])
      .catch(this.handleError);
  }

  getRecipe(id: number): Promise<Recipe> {
    return this.http.get('/api/recipes/' + id)
      .toPromise()
      .then(response => response as Recipe)
      .catch(this.handleError);
  }

  updateRecipe(id: number, newObjectData: Recipe): Promise<Recipe> {
    return this.http.put('/api/recipes/' + id, newObjectData)
      .toPromise()
      .then(response => response as Recipe)
      .catch(this.handleError);
  }

  deleteRecipe(id: number) {
    this.http.delete('/api/recipes/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  createRecipe(recipe: Recipe): Promise<Recipe> {
    return this.http.put('/api/recipes/', recipe)
      .toPromise()
      .then(response => response as Recipe)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
