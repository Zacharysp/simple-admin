import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppListComponent} from './application/app-list/app-list.component';
import {AppDetailComponent} from './application/app-detail/app-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'apps', component: AppListComponent,
    children: [
      { path: 'detail', component: AppDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
