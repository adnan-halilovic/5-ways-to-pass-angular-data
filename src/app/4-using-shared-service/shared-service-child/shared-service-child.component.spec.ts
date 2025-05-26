import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedServiceChildComponent } from './shared-service-child.component';

describe('SharedServiceChildComponent', () => {
  let component: SharedServiceChildComponent;
  let fixture: ComponentFixture<SharedServiceChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedServiceChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedServiceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
