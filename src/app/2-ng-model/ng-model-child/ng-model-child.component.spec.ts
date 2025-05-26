import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelChildComponent } from './ng-model-child.component';

describe('NgModelChildComponent', () => {
  let component: NgModelChildComponent;
  let fixture: ComponentFixture<NgModelChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModelChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
