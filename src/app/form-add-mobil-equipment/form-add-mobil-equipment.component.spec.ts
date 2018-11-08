import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddMobilEquipmentComponent } from './form-add-mobil-equipment.component';

describe('FormAddMobilEquipmentComponent', () => {
  let component: FormAddMobilEquipmentComponent;
  let fixture: ComponentFixture<FormAddMobilEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddMobilEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddMobilEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
