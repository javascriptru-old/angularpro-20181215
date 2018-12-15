import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ SomeService ]
})
export class ItemComponent implements OnInit {

  ngOnInit() {
  }

}
