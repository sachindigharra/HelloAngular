import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Template } from './template/template';
import { Reactive } from './reactive/reactive';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Template,Reactive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
}
