import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDir } from './directive/structural-dir/structural-dir';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StructuralDir],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
}
