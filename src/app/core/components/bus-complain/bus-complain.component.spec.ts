import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusComplainComponent } from './bus-complain.component';

describe('BusComplainComponent', () => {
  let component: BusComplainComponent;
  let fixture: ComponentFixture<BusComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
