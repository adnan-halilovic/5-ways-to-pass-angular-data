import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedServiceParentComponent } from './shared-service-parent.component';

describe('SharedServiceParentComponent', () => {
  let component: SharedServiceParentComponent;
  let fixture: ComponentFixture<SharedServiceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedServiceParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedServiceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
