import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbidenUserNames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // this.signUpForm.valueChanges.subscribe(
    //   (value)=>console.log(value) // will print with every change in the input
    // );
    this.signUpForm.statusChanges.subscribe(
      (status)=>console.log(status) 
    );
    this.signUpForm.setValue({
      userData: {
        username: 'Max',
        email: 'a@a.com'
      },
      gender: 'male',
      hobbies: []
    });
    this.signUpForm.setValue({
      userData: {
        username: 'Anna',
      }
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  getControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbidenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
    // return {'nameIsForbidden': false}
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((res, rej) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          res({ emailIsForbidden: true });
        }else{
          res(null);
        }
      }, 1500);
    });
    return promise;
  }
}
