import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  a = { x : 10};

  constructor() { }

  ngOnInit() {
  }

}
