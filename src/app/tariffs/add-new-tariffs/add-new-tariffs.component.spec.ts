import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTariffsComponent } from './add-new-tariffs.component';

describe('AddNewTariffsComponent', () => {
  let component: AddNewTariffsComponent;
  let fixture: ComponentFixture<AddNewTariffsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTariffsComponent]
    });
    fixture = TestBed.createComponent(AddNewTariffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
