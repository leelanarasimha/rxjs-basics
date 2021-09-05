import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOperatorComponent } from './generate-operator.component';

describe('GenerateOperatorComponent', () => {
  let component: GenerateOperatorComponent;
  let fixture: ComponentFixture<GenerateOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
