import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../na-pipe';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {
  name: string = 'SAchin SHarma';
  temp:any='';
  
  currentDate:Date = new Date();
  Student:any={
    Name:'sachin sharma',
    Education:'B.tech',
    Branch:'CSE'
  }
  currentTime:Observable<Date>=new Observable<Date>;
  constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date()))
  }
}
