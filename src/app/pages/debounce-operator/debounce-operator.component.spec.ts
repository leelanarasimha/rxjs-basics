import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceOperatorComponent } from './debounce-operator.component';

describe('DebounceOperatorComponent', () => {
  let component: DebounceOperatorComponent;
  let fixture: ComponentFixture<DebounceOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
