import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../service/vehicle';
import { Alert } from '../reusable/alert/alert';
import { MyButton } from '../reusable/my-button/my-button';

@Component({
  selector: 'app-data',
  imports: [Alert,MyButton],
  templateUrl: './data.html',
  styleUrl: './data.css'
})
export class Data implements OnInit{
  ngOnInit(): void {
      this.getUsers();
  }
  constructor(private vehicleServ:Vehicle) { }
  userList:any[]=[];
  getUsers(){
    this.vehicleServ.getAllUsers().subscribe((res:any)=>{
      this.userList=res;
      console.log(this.userList)
      debugger;
    })
  }
  onDelete(){
    debugger;
    alert('Someone Try to change the data')
  }

}
