import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route: Router) {}
  ngOninit() {}

  addUser() {
    this.route.navigateByUrl('/addUser');
  }

  viewUser() {
    this.route.navigateByUrl('/viewUser');
  }

  updateUser() {
    this.route.navigateByUrl('/updateUser');
  }

  deleteUser() {
    this.route.navigateByUrl('/deleteUser');
  }

}
