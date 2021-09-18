import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowOperatorComponent } from './window-operator.component';

describe('WindowOperatorComponent', () => {
  let component: WindowOperatorComponent;
  let fixture: ComponentFixture<WindowOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
