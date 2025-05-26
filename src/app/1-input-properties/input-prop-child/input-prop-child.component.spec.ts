import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropChildComponent } from './input-prop-child.component';

describe('InputPropChildComponent', () => {
  let component: InputPropChildComponent;
  let fixture: ComponentFixture<InputPropChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPropChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPropChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
