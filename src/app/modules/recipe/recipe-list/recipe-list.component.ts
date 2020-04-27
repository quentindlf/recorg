import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeService.getRecipes().subscribe(rep => {
      console.log(rep);
      this.recipes = rep;
    });
  }

}
