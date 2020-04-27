import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeModel } from 'src/app/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  addRecipe(recipe: RecipeModel) {
    return this.http.post('http://localhost:3000/recipes', recipe, { headers: { header: 'Content-Type: application/json' } });
  }

  getRecipes() {
    return this.http.get<RecipeModel[]>('http://localhost:3000/recipes');
  }

  getRecipe(recipeId: string | number) {
    return this.http.get<RecipeModel>(`http://localhost:3000/recipes/${recipeId}`);
  }

}
