import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingInformationComponent } from './editing-information.component';

describe('EditingInformationComponent', () => {
  let component: EditingInformationComponent;
  let fixture: ComponentFixture<EditingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditingInformationComponent]
    });
    fixture = TestBed.createComponent(EditingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
