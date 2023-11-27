import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedListOfTariffsComponent } from './detailed-list-of-tariffs.component';

describe('DetailedListOfTariffsComponent', () => {
  let component: DetailedListOfTariffsComponent;
  let fixture: ComponentFixture<DetailedListOfTariffsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedListOfTariffsComponent]
    });
    fixture = TestBed.createComponent(DetailedListOfTariffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
