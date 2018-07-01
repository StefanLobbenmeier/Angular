import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  displayName = false;
  color = "orange";

  colors = ["red", "green", "blue", "yellow"]

  public onClick(color) {
    this.color = color;
  }

  constructor() { }

  ngOnInit() {
  }

}
