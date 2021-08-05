import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipLastOperatorComponent } from './skip-last-operator.component';

describe('SkipLastOperatorComponent', () => {
  let component: SkipLastOperatorComponent;
  let fixture: ComponentFixture<SkipLastOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipLastOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipLastOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
