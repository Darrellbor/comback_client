import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
