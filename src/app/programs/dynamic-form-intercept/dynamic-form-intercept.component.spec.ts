import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormInterceptComponent } from './dynamic-form-intercept.component';

describe('DynamicFormInterceptComponent', () => {
  let component: DynamicFormInterceptComponent;
  let fixture: ComponentFixture<DynamicFormInterceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormInterceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormInterceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
