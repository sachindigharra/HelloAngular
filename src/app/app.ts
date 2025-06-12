import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfElse } from './control-flow/if-else/if-else';
import { ForSwitch } from './control-flow/for-switch/for-switch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,IfElse,ForSwitch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
}
