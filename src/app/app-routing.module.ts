import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppListComponent} from './application/app-list/app-list.component';
import {AppDetailComponent} from './application/app-detail/app-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Code404Component} from './code404/code404.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'apps', component: AppListComponent},
  {path: 'detail', component: AppDetailComponent},
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
