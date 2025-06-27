import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {
  studentObj:any={
    firstName:'',
    lastName:'',
    username:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  }
  formValue:any;
  onSubmit(){
    debugger;
    this.formValue=this.studentObj;
  }
  resetForm(){
    this.studentObj = {
              firstName:'',
              lastName:'',
              userName:'',
              city:'',
              state:'',
              zipCode: '',
              isAcceptTerms: false
            }
  }
}
