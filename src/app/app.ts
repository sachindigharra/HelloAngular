import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from './add-employee/add-employee';
import { EmployeeList } from './employee-list/employee-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AddEmployee,EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
}
