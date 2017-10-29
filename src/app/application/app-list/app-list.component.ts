import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  applications: Array<Application>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.applications = [
      new Application
      ('Med', 'Medtrics', '56820f90-6c05-11e7-92a6-dbf9284aaa70', '1psBIN3wB51gnopCPkfQE8ebWna5tAOsaMpQzUK', 'Chromosome API', '2017-10-16')
    ];
  }

  toAppDetail() {
    this.router.navigate(['/detail']);
  }

}

export class Application {
  constructor(
    public appName: string,
    public companyName: string,
    private appId: string,
    private appSecret: string,
    public desc: string,
    public createDate: string
  ) {

  }
}
