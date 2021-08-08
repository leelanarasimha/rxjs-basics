import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleOperatorComponent } from './sample-operator.component';

describe('SampleOperatorComponent', () => {
  let component: SampleOperatorComponent;
  let fixture: ComponentFixture<SampleOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
