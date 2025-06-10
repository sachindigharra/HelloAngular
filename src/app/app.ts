import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttributeDir } from './attribute-dir/attribute-dir';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AttributeDir],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
}
