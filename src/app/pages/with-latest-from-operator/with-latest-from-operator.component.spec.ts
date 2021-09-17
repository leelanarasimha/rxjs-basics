import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLatestFromOperatorComponent } from './with-latest-from-operator.component';

describe('WithLatestFromOperatorComponent', () => {
  let component: WithLatestFromOperatorComponent;
  let fixture: ComponentFixture<WithLatestFromOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithLatestFromOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithLatestFromOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
