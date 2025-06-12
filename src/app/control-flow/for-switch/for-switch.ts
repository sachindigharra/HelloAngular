import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  imports: [FormsModule],
  templateUrl: './for-switch.html',
  styleUrl: './for-switch.css'
})
export class ForSwitch {
  dayNumber:number=0;
  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane ' ];
  studentList: any [] = [
    {studId:12, name: 'AAA', city: 'Pune',isActive:false},
    {studId:22, name: 'BBB', city:'Delhi',isActive:true},
    {studId:32, name: 'CC', city: 'Jalgao',isActive:false},
    {studId:56, name: 'DD', city: 'Mumbai', isActive:true},
    {studId:34, name: 'EE', city: 'Nagpur', isActive:false},
    {studId:76, name: 'FFF', city: 'Thane', isActive:true}
  ]
}
