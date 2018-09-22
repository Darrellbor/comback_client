import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusFeedbackComponent } from './bus-feedback.component';

describe('BusFeedbackComponent', () => {
  let component: BusFeedbackComponent;
  let fixture: ComponentFixture<BusFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
