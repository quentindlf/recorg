// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT
import { HeaderComponent } from './header/header.component';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
