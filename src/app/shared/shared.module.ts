import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [],
  exports: [
    AngularFontAwesomeModule,
    FormsModule
  ]
})
export class SharedModule { }
