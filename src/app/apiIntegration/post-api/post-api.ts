import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule,JsonPipe],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css'
})
export class PostApi implements OnInit {

  departmentObj:any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  postList:any[]=[];
  postObj:any = {
    "userId":1,
    "id": null,
    "title": "",
    "body": ""
  }
 formValue:any;
  // inject dependency
  http = inject(HttpClient)

  ngOnInit(){
    this.getAllPost();
  }
  onSave(){
    debugger;
    this.http.post('https://jsonplaceholder.typicode.com/posts',this.postObj).subscribe((res:any)=>{
      this.formValue=res;
      this.getAllPost();
    })

  }
  getAllPost(){
    debugger
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:any)=>{
      debugger
      this.postList=res;
  
    })
  }
}
