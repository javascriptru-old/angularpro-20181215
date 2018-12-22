import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sw-test';

  constructor(updates: SwUpdate, swPush: SwPush) {
    // updates.available.subscribe(_ => {
    //   // dialog 
    // });

    // updates.checkForUpdate()
    
    // swPush.messages.subscribe(_ => {

    // });
  }
}
