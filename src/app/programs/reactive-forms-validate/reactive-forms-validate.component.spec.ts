import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsValidateComponent } from './reactive-forms-validate.component';

describe('ReactiveFormsValidateComponent', () => {
  let component: ReactiveFormsValidateComponent;
  let fixture: ComponentFixture<ReactiveFormsValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
