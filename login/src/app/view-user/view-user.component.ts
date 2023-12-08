import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  username: string;
  email: string;
  password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, username: 'Pavithra', email: 'pavi@gmail.com', password: 'pavi@123'},
  {position: 2, username: 'Pavithra', email: 'pavi@gmail.com', password: 'pavi@123'},
  {position: 3, username: 'Pavithra', email: 'pavi@gmail.com', password: 'pavi@123'},
  {position: 4, username: 'Pavithra', email: 'pavi@gmail.com', password: 'pavi@123'},
  {position: 5, username: 'Pavithra', email: 'pavi@gmail.com', password: 'pavi@123'}
];

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  constructor(){}
  displayedColumns: string[] = ['position', 'username', 'email', 'password'];
  dataSource = ELEMENT_DATA;
}
