import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildchildComponent } from './childchild.component';

describe('ChildchildComponent', () => {
  let component: ChildchildComponent;
  let fixture: ComponentFixture<ChildchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
