import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formAssign', {static: false}) signupForm: NgForm;
  defaultPlan='Advanced';
  user = {
    email: '',
    password: '',
    plan: ''
  }
  subbmitted = false;



  onSubmit(){
    console.log(this.signupForm)
    console.log(this.signupForm.value.userData.email, this.signupForm.value.userData.password, this.signupForm.value.plan)
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.plan = this.signupForm.value.plan;
    this.subbmitted = true;
    this.signupForm.reset();
  }

}