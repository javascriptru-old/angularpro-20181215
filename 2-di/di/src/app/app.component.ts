import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  providers: [ Services_for_all ],
//  viewProviders: [ Only_for_my ]
})
export class AppComponent {
  title = 'di';
}

// VIEW & CONTENT

/*

<my-component>

  <div>
    <another-component></another-component>
  </div>

</my-component>


*/
