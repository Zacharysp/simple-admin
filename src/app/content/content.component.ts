import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';


  constructor(public router: Router) {
    router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
       switch (event.url) {
         case '/dashboard':
           this.pageTitle = 'Dashboard';
           break;
         case '/apps':
           this.pageTitle = 'My Applications';
           break;
         case '/detail':
           this.pageTitle = 'Application Detail';
           break;
       }
    });
  }

  ngOnInit() {
  }

}
