import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsPagesComponent } from './reservations-pages.component';

describe('ReservationsPagesComponent', () => {
  let component: ReservationsPagesComponent;
  let fixture: ComponentFixture<ReservationsPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationsPagesComponent]
    });
    fixture = TestBed.createComponent(ReservationsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
