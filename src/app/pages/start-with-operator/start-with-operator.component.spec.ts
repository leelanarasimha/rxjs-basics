import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWithOperatorComponent } from './start-with-operator.component';

describe('StartWithOperatorComponent', () => {
  let component: StartWithOperatorComponent;
  let fixture: ComponentFixture<StartWithOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartWithOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWithOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
