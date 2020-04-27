import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  recipeId: string | number;
  recipe: RecipeModel;

  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap);

    this.recipeId = this.route.snapshot.paramMap.get('recipeId');

    this.recipeService.getRecipe(this.recipeId).subscribe(rep => {
      this.recipe = rep;
    });
  }

}
