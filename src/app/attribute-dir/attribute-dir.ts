import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
 imports: [CommonModule,FormsModule],
  templateUrl: './attribute-dir.html',
  styleUrl: './attribute-dir.css'
})
export class AttributeDir {

  div1BgColor:String="bg-primary";

  isActiveDiv2:boolean=false;

  num1:String='';
  num2:String='';
  div1BgRed(){
    this.div1BgColor="red";
  }
  div1BgGreen(){
    this.div1BgColor="bg-success";
  }
  changeIsActiveDiv2(){
    if(this.isActiveDiv2){
      this.isActiveDiv2=false;
    }else{
      this.isActiveDiv2=true;
    }
  }
  studentList: any[] = [
  { id: 1, name: "Alice", city: "Delhi", isActive: true ,Marks:23},
  { id: 2, name: "Bob", city: "Mumbai", isActive: false ,Marks:39},
  { id: 3, name: "Charlie", city: "Bangalore", isActive: false,Marks:85 },
];
}
