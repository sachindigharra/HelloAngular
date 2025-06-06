import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
  courseName:String="B. tech Cse";
  stateName:String="Bihar";
  isIndian:boolean=false;
 changeCourseName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.courseName = input.value;
  }
}
