import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ]
})
export class RecipeModule { }
