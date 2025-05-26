import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCChildComponent } from './v-c-child.component';

describe('VCChildComponent', () => {
  let component: VCChildComponent;
  let fixture: ComponentFixture<VCChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VCChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VCChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
