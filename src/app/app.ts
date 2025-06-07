import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
  dataBindingType = signal("Signal");
  changeSignalState(){
    this.dataBindingType.set("Signal is property work on it state ")
  }
}
