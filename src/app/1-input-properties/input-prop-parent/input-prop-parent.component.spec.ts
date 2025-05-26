import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropParentComponent } from './input-prop-parent.component';

describe('InputPropParentComponent', () => {
  let component: InputPropParentComponent;
  let fixture: ComponentFixture<InputPropParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPropParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPropParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
