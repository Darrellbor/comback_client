import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BusComplainComponent } from './components/bus-complain/bus-complain.component';
import { BusFeedbackComponent } from './components/bus-feedback/bus-feedback.component';
import { ComplainDetailsComponent } from './components/complain-details/complain-details.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'c', pathMatch: 'full' },
  { path: 'c', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'complain/:id', component: BusComplainComponent },
  { path: 'feedback/:id', component: BusFeedbackComponent },
  { path: 'complain/details/:id', component: ComplainDetailsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
