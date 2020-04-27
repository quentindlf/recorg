import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { RecipeModel } from 'src/app/models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeService.getRecipes().subscribe(rep => {
      console.log(rep);
      this.recipes = rep;
    });
  }

  navigateToDetails(id: number) {
    this.router.navigateByUrl(`/recipe/details/${id}`);
  }

}
