import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Application, ApplicationService} from '../application.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  applications: Array<Application>;

  constructor(private router: Router, private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.applications = this.applicationService.getApplications();
  }

  toAppDetail(application: Application) {
    this.router.navigateByUrl('/detail/' + application.appId);
  }

}
