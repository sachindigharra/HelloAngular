import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Vehicle {

  http=inject(HttpClient)
 
  getAllUsers(){
   return this.http.get('https://jsonplaceholder.typicode.com/users')
      
  }
}
