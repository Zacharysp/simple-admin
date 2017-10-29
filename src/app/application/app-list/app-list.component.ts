import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  applications: Array<Application>;

  constructor() {
  }

  ngOnInit() {
    this.applications = [
      new Application
      ('Med', 'Medtrics', '56820f90-6c05-11e7-92a6-dbf9284aaa70', '1psBIN3wB51gnopCPkfQE8ebWna5tAOsaMpQzUK', 'Chromosome API', '2017-10-16')
    ];
  }

}

export class Application {
  constructor(
    public appName: string,
    public companyName: string,
    public appId: string,
    public appSecret: string,
    public desc: string,
    public createDate: string
  ) {

  }
}
