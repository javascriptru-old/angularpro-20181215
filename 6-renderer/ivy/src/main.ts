/*
@Component({
  selector: 'app-myivy',
  template: `
    <p>
      myivy works with <b>{{name}}</b>
    </p>
    <input (input)="name=$event.target.value">
  `,
})
export class MyivyComponent {
  name = 'component';
}
*/

import * as core from '@angular/core'

export class MyivyComponent {
  name = 'component';

  updateName(name) {
    this.name = name;
  }

  static ngComponentDef = core.ɵdefineComponent({
    type: MyivyComponent,
    selectors: [['app-myivy']],
    factory: () => new MyivyComponent(),
    template: (renderFlags: core.ɵRenderFlags, ctx: MyivyComponent) => {

      if (renderFlags & 1) {   // Create: This runs only on first render
        core.ɵE(0, 'p');
        core.ɵT(1, 'myivy works with ');
        core.ɵE(2, 'b');
        core.ɵT(3);   // <-- Placeholder for the name
        core.ɵe();
        core.ɵe();
        core.ɵE(4, 'input');
        core.ɵL('input', $event => ctx.updateName($event.target.value));
      }
      if (renderFlags & 2) {   // Update: This runs on every change detection
       core.ɵt(3, ctx.name);  // ctx is our component instance
       core.ɵp(4, 'value', ctx.name); // to update element property
      }
    }
  });

}

core.ɵrenderComponent(MyivyComponent);