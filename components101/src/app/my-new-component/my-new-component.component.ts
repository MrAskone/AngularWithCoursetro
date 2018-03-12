import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-my-new-component',
  // templateUrl: './my-new-component.component.html',
  template: `

  <h1 [ngClass]="titleClasses">Hello!</h1>

  `,
  styles: [`
  
  h1 {
    text-decoration:underline;
  }

  .red-title {
    color: red;
  }

  .large-title {
    font-size: 4em;
  }

  `]
})
export class MyNewComponentComponent{

  // constructor() { }
  titleClass = false
  titleClasses = {
    'red-title' : true,
    'large-title' : true
  }


}
