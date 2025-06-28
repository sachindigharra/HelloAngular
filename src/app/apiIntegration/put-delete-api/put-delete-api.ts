import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-delete-api',
  imports: [FormsModule],
  templateUrl: './put-delete-api.html',
  styleUrl: './put-delete-api.css'
})
export class PutDeleteApi implements OnInit {
  ngOnInit(): void {
    this.getAllPost()
  }
  http = inject(HttpClient);
  postList:any[]=[];
  postObj:any={
    "userId": null,
    "id": null,
    "title": "",
    "body": ""
  }

  // get all post

  getAllPost(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:any)=>{
      this.postList = res;
      debugger;
    })
  }
  onEdit(data:any){
    this.postObj={...data};
  }
  onSave(){
   //this.http.put('https://jsonplaceholder.typicode.com/posts/`${}',this.postObj)
  }
  onUpdate(){
    this.http.put("https://jsonplaceholder.typicode.com/posts/"+this.postObj.id,this.postObj).subscribe((res:any)=>{
      debugger;
      for( let i of this.postList){
        if(res.id==i.id){
          i.body=res.body;
        }
      }

    })
  }
  onDelete(data:any){
    for(let i of this.postList){
      this.postList= this.postList.filter(item=>item.id!==data.id)
    }
  }


}
