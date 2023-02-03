import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // statuss=['Stable','Critical','Finished']
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjName],
        CustomValidators.invalidProjNameAsync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl("Stable"),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
