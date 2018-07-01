import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEventEmitter.emit('Hey ' + this.parentData);
  }

}
