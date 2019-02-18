import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  surveyForm: FormGroup;

  ngOnInit() {
    this.surveyForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'age': new FormControl(null),
      'role': new FormControl(null),
      'recomment': new FormArray([
        'recomment1': new FormControl(null),
        'recomment2': new FormControl(null),
        'recomment3': new FormControl(null)]),
      'like': new FormArray([]),
      'improved': new FormControl(null),
      'comments': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.surveyForm);
  }

}
