import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-childchild',
  templateUrl: './childchild.component.html',
  styleUrls: ['./childchild.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildchildComponent implements OnInit, DoCheck {

  @Input('a') a;

  constructor() { }

  ngDoCheck() {
    console.log('ngDoCheck!');
  }
  ngOnChanges (){
    console.log('CD fired!');
  }

  ngOnInit() {
  }

}
