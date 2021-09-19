import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCountOperatorComponent } from './window-count-operator.component';

describe('WindowCountOperatorComponent', () => {
  let component: WindowCountOperatorComponent;
  let fixture: ComponentFixture<WindowCountOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowCountOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowCountOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
