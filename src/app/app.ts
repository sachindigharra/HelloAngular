import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetApi } from './apiIntegration/get-api/get-api';
import { PostApi } from './apiIntegration/post-api/post-api';
import { PutDeleteApi } from './apiIntegration/put-delete-api/put-delete-api';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GetApi,PostApi,PutDeleteApi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
}
