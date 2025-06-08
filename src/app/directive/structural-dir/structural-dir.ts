import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.html',
  styleUrl: './structural-dir.css'
})
export class StructuralDir {
  isDiv1Visible:boolean=true;
  isDiv2Visible:boolean=true;
  isDiv3Visible:boolean=true;
  num1:String="";
  num2:String="";
  isActive:boolean=false;
  isSelectedState:String="";
  cityArray:String[]=['delhi',"up","UK","Bihar"]

  togleDiv2(){
    if(this.isDiv2Visible){
      this.isDiv2Visible =false;
    }
    else{
      this.isDiv2Visible=true;
    }
  }
  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }

  studentList: any[] = [
  { id: 1, name: "Alice", city: "Delhi", isActive: true },
  { id: 2, name: "Bob", city: "Mumbai", isActive: false },
  { id: 3, name: "Charlie", city: "Bangalore", isActive: false },
];

  
 
}
