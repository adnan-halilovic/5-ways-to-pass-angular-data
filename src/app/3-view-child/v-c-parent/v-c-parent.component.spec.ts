import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCParentComponent } from './v-c-parent.component';

describe('VCParentComponent', () => {
  let component: VCParentComponent;
  let fixture: ComponentFixture<VCParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VCParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VCParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
