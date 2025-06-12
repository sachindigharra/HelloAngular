import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { StructuralDir } from './directive/structural-dir/structural-dir';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularBasic-app';
  constructor(private routes:Router) {
    
  }
  navigateToStructuralDir(){
    // naviagate using ts function with constructor Dependency
    this.routes.navigateByUrl('structural-dir')
  }
}
