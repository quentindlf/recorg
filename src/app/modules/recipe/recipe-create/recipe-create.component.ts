import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  recipeForm: FormGroup;
  pageLoaded: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.initForm();
  }

  get form() { return this.recipeForm.controls; }
  get ingredientsForm() { return this.form.ingredients as FormArray; }

  initForm() {
    this.recipeForm = this.formBuilder.group({
      name: ['Tarte'],
      preparation: ['Oui'],
      ingredients: new FormArray([
        this.formBuilder.group({
          ingredientNumber: [1],
          ingredientName: ['Jambon']
        })
      ])
    });

  }

  addIngredientLine() {
    this.ingredientsForm.push(
      this.formBuilder.group({
        ingredientNumber: [0],
        ingredientName: ['']
      })
    );
  }

  onSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }

    console.log(this.recipeForm.value);

    this.recipeService.addRecipe(this.recipeForm.value).subscribe(rep => {
      console.log(rep);
    });

    //this.router.navigateByUrl('/recipe');
    console.log(this.recipeForm);
  }

}
