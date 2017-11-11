import { Component, OnInit } from '@angular/core';
import {Application, ApplicationService} from '../application.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-app-modify',
  templateUrl: './app-modify.component.html',
  styleUrls: ['./app-modify.component.css']
})
export class AppModifyComponent implements OnInit {


  application: Application;

  constructor(private routerInfo: ActivatedRoute, private applicationService: ApplicationService,
              private router: Router) { }

  ngOnInit() {
    const appId = this.routerInfo.snapshot.params['appId'];
    this.application = this.applicationService.getApplication(appId);
  }

  cancel() {
    if (this.application) {
      this.router.navigateByUrl('detail/' + this.application.appId);
    }else {
      this.router.navigate(['apps']);
    }

  }

  save() {
    this.router.navigateByUrl('detail/' + this.application.appId);
  }

}
