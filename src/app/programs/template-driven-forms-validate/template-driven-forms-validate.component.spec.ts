import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsValidateComponent } from './template-driven-forms-validate.component';

describe('TemplateDrivenFormsValidateComponent', () => {
  let component: TemplateDrivenFormsValidateComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
