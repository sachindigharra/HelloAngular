import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../service/vehicle';

@Component({
  selector: 'app-data',
  imports: [],
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

}
