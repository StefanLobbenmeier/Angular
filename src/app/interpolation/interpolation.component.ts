import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
  <h2>
    {{names[0]}}
  </h2>
  <h2>
    {{"Work Work " + names[1]}}
    {{1 + 2 + 3 + 4}}
    {{("Work Work " + names[1]).length}}
  </h2>

  <h1>
   {{all().toUpperCase()}}
  </h1>
  
  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public work = "work"

  public names = ["Angelica", "Eliza", "Peggy"]

  all() {
    return [
      this.getwork(this.names[0]),
      this.getwork(this.names[1]),
      "and " + this.names[2]
    ].join(" ");
  }

  getwork(name) {
    return [this.work, this.work, name].join(" ")
  }

  constructor() { }

  ngOnInit() {
  }

}
