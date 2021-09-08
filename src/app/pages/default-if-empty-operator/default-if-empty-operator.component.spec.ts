import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultIfEmptyOperatorComponent } from './default-if-empty-operator.component';

describe('DefaultIfEmptyOperatorComponent', () => {
  let component: DefaultIfEmptyOperatorComponent;
  let fixture: ComponentFixture<DefaultIfEmptyOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultIfEmptyOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultIfEmptyOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
