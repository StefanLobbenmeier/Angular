import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-inline',
  template: `
  <div>
    Work work
  </div>
    `,
  styles: [`
    div {
      color: red;
    }
  `]
})
export class TestInlineComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
