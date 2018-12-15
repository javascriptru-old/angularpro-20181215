import { Component, OnInit, ComponentFactoryResolver, ContentChild, ElementRef, ContentChildren, QueryList, AfterContentInit, ViewChild, ViewChildren, AfterViewInit, ViewContainerRef } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { SomeService } from '../some.service';
import { BannerComponent } from '../banner/banner.component';
import { Banner2Component } from '../banner2/banner2.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, AfterContentInit, AfterViewInit {

  public mybanner = BannerComponent;

  //@ContentChild(ItemComponent) private itemComponent: ItemComponent;
  @ContentChild('h') h: ElementRef;
  @ContentChild(SomeService) someServiceItem: ElementRef;
  @ContentChild(ItemComponent, {read: ElementRef}) el: ElementRef;

  @ContentChildren(ItemComponent) items: QueryList<ItemComponent>;

  // @ViewChild()
  // @ViewChildren()
  @ViewChild('host', {read: ViewContainerRef}) host: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 

  }

  ngOnInit() {
    const bannerFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    const bannerComponent = this.host.createComponent(bannerFactory);

    setTimeout(() => {
      this.mybanner = Banner2Component;
    }, 3000);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    //console.log(this.items.toArray());
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
