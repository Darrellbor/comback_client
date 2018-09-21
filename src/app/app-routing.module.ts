import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './core/core.module#CoreModule' },
  { path: 'a', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'ba', loadChildren: './bus-admin/bus-admin.module#BusAdminModule' },
  { path: 's', loadChildren: './staff/staff.module#StaffModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
