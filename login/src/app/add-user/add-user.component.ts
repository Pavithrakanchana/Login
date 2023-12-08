import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  addUserForm!: FormGroup;

  constructor(private route: Router) {}

  ngOnInit() {
    this.addUserForm = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  onSubmit(formData: any) {
    console.log('Valid?', formData.valid); // true or false
    console.log('UserName : ', formData.value.userName);
    console.log('Email : ', formData.value.email);
    console.log('Password : ', formData.value.password);
  }

  moveBack(){
    this.route.navigateByUrl('/');
  }
}
