import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-classes',
  templateUrl: './binding-classes.component.html',
  styleUrls: ['./binding-classes.component.css']
})
export class BindingClassesComponent implements OnInit {

  public sucessClass = "text-success"
  public hasError = true

  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
