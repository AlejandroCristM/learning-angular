import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formName') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmitted() {
    console.log(this.signupForm);
  }

}
