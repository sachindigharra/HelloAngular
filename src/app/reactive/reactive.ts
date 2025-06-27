import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css'
})
export class Reactive {
  studentForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.minLength(6),Validators.required]),
    // here we pass as Place Holder,validaitors inside the FormControl() constructor
    lastName:new FormControl("empty"),
    userName:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    zipCode:new FormControl(),
    isAcceptTerms:new FormControl()
  });
  formValue:any;
  onSave(){
    
    this.formValue = this.studentForm.value;
  }
}
