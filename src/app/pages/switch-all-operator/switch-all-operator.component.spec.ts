import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchAllOperatorComponent } from './switch-all-operator.component';

describe('SwitchAllOperatorComponent', () => {
  let component: SwitchAllOperatorComponent;
  let fixture: ComponentFixture<SwitchAllOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchAllOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchAllOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
