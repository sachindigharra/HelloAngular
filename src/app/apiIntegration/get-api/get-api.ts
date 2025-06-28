

import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [JsonPipe],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi {
  // constructor Dependency Injection
  constructor(private http:HttpClient) {
    this.getAllPost();
  }
  
  userList:any[]=[];
  getAllPost(){
    //debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
     // debugger;
      this.userList=res;
    })
  }

}
