<<<<<<< HEAD
import {Component} from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'sidebar-nav',
    template: require('./sidebar-nav.html'),
})

export class SidebarNavComponent {

    constructor() {

    }

    ngOnInit() {

    }
=======
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613
}
