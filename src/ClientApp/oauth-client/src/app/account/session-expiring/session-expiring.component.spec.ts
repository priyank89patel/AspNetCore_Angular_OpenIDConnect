import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionExpiringComponent } from './session-expiring.component';

describe('SessionExpiringComponent', () => {
  let component: SessionExpiringComponent;
  let fixture: ComponentFixture<SessionExpiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionExpiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionExpiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
