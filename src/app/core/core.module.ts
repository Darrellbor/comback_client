import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BusComplainComponent } from './components/bus-complain/bus-complain.component';
import { BusFeedbackComponent } from './components/bus-feedback/bus-feedback.component';
import { ComplainDetailsComponent } from './components/complain-details/complain-details.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ],
  declarations: [HomeComponent, SearchComponent, BusComplainComponent, BusFeedbackComponent, ComplainDetailsComponent, CompanyComponent, CustomerComponent],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
