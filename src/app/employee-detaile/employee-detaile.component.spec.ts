import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetaileComponent } from './employee-detaile.component';

describe('EmployeeDetaileComponent', () => {
  let component: EmployeeDetaileComponent;
  let fixture: ComponentFixture<EmployeeDetaileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDetaileComponent]
    });
    fixture = TestBed.createComponent(EmployeeDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
