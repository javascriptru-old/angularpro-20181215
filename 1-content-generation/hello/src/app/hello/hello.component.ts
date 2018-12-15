import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p (click)="onClick()">
      hello, {{name}}!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnInit {

  @Input() name: string;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit(this.name)
  }

}
