import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('tokenData') && localStorage.getItem('tokenData') !== '') {
      this.userData = JSON.parse(atob(localStorage.getItem('tokenData')));
    }
  }

  logout() {
    localStorage.removeItem('tokenData');
    this.router.navigateByUrl('/');
  }

}
