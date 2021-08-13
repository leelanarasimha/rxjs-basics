import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOperatorComponent } from './last-operator.component';

describe('LastOperatorComponent', () => {
  let component: LastOperatorComponent;
  let fixture: ComponentFixture<LastOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
