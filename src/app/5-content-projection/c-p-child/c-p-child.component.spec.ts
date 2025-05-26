import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPChildComponent } from './c-p-child.component';

describe('CPChildComponent', () => {
  let component: CPChildComponent;
  let fixture: ComponentFixture<CPChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
