import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTariffsComponent } from './list-of-tariffs.component';

describe('ListOfTariffsComponent', () => {
  let component: ListOfTariffsComponent;
  let fixture: ComponentFixture<ListOfTariffsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfTariffsComponent]
    });
    fixture = TestBed.createComponent(ListOfTariffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
