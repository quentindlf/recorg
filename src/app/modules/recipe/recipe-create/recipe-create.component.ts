import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  recipeForm: FormGroup;
  pageLoaded: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  get form() { return this.recipeForm.controls; }
  get ingredientsForm() { return this.form.ingredients as FormArray; }

  initForm() {
    this.recipeForm = this.formBuilder.group({
      name: [''],
      preparation: [''],
      ingredients: new FormArray([
        this.formBuilder.group({
          ingredientNumber: [0],
          ingredientName: ['']
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

    this.router.navigateByUrl('/recipe');
    console.log(this.recipeForm);
  }

}
