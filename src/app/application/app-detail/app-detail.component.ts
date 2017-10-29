import { Component, OnInit } from '@angular/core';
import {Application} from '../app-list/app-list.component';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {

  private application: Application;

  constructor() {
  }

  ngOnInit() {
  }

}
