import {Component, OnInit} from '@angular/core';
import {Application, ApplicationService} from '../application.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {

  application: Application;

  constructor(private routerInfo: ActivatedRoute, private applicationService: ApplicationService,
              private router: Router) {
  }

  ngOnInit() {
    const appId = this.routerInfo.snapshot.params['appId'];
    this.application = this.applicationService.getApplication(appId);
  }

  modify() {
    this.router.navigateByUrl('modify/' + this.application.appId);
  }

}
