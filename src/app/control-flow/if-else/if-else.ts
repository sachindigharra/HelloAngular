import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  imports: [FormsModule],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css'
})
export class IfElse {
  div1BgColor:String="bg-primary";
  div1Visible:boolean=true;
  div2Visible:boolean=false;
  div3Visible:boolean=false;
  div4Visible:boolean=false;
  num1:String='';
  num2:String='';
  selectedCity:String='';

  showDiv1(){
    this.div1Visible=true;
  }
  hideDiv1(){
    this.div1Visible=false;
  }
  toggleDiv2(){
    if(this.div2Visible){
      this.div2Visible=false;
    }else{
      this.div2Visible=true;
    }
  }  
  studentList: any[] = [
  { id: 1, name: "Alice", city: "Delhi", isActive: true ,Marks:23},
  { id: 2, name: "Bob", city: "Mumbai", isActive: false ,Marks:39},
  { id: 3, name: "Charlie", city: "Bangalore", isActive: false,Marks:85 },
];
}
