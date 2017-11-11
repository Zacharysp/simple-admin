import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menusItems: Array<MenuItem>;

  currentItemId: number;

  constructor(public router: Router) { }

  ngOnInit() {
    this.menusItems = [
      new MenuItem(0, 'Dashboard', 'fa-bar-chart', 'dashboard'),
      new MenuItem(1, 'My Applications', 'fa-cube', 'apps'),
    ];
    this.currentItemId = 0;
  }

  nav(item: MenuItem) {
    this.router.navigateByUrl(item.url);
    this.currentItemId = item.id;
  }
}

export class MenuItem {
  constructor(
    public id: number,
    public name: string,
    public icon: string,
    public url: string
    ) {}
}
