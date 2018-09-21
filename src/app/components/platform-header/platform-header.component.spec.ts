import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformHeaderComponent } from './platform-header.component';

describe('PlatformHeaderComponent', () => {
  let component: PlatformHeaderComponent;
  let fixture: ComponentFixture<PlatformHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
