import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowToggleOperatorComponent } from './window-toggle-operator.component';

describe('WindowToggleOperatorComponent', () => {
  let component: WindowToggleOperatorComponent;
  let fixture: ComponentFixture<WindowToggleOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowToggleOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowToggleOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
