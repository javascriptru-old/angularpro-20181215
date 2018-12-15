import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {
  @Input('delay') delay: number;

  constructor(
     private view: ViewContainerRef,
     private template: TemplateRef<HTMLElement>
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }

}


/*


<div *my>
</div>

<ng-container my> 
<div>
</div>
</ng-container>

*/