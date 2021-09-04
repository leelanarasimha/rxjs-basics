import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferOperatorComponent } from './defer-operator.component';

describe('DeferOperatorComponent', () => {
  let component: DeferOperatorComponent;
  let fixture: ComponentFixture<DeferOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeferOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
