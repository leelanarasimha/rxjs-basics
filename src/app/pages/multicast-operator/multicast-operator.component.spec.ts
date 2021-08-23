import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastOperatorComponent } from './multicast-operator.component';

describe('MulticastOperatorComponent', () => {
  let component: MulticastOperatorComponent;
  let fixture: ComponentFixture<MulticastOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticastOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticastOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
