import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPParentComponent } from './c-p-parent.component';

describe('CPParentComponent', () => {
  let component: CPParentComponent;
  let fixture: ComponentFixture<CPParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
