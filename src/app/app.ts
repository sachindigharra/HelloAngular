import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vehicle } from './service/vehicle';
import { Data } from './data/data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Data],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
}
