import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttontext: String = "Button Text!";
  @Output() outputEvent : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  buttonClick(){
    this.outputEvent.emit()
  }
 
}
