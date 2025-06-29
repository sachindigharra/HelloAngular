import { CommonModule } from '@angular/common';
import { Component ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [CommonModule],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {
  @Input() btnText:String='';
  @Input() btnType:String='';
  @Output() onBtnClick = new EventEmitter();
  // when the click that button 
  onClick(){
    debugger;
    //we create new event for parent Component
    //that event only occur by click that from parnent component
    this.onBtnClick.emit();
  }

}
