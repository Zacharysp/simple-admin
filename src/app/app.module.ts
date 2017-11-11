import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {ContentComponent} from './content/content.component';
import {AppListComponent} from './application/app-list/app-list.component';
import {AppDetailComponent} from './application/app-detail/app-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Code404Component} from './code404/code404.component';
import {ApplicationService} from './application/application.service';
import {AppModifyComponent } from './application/app-modify/app-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SideBarComponent,
    ContentComponent,
    AppListComponent,
    AppDetailComponent,
    DashboardComponent,
    Code404Component,
    AppModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
