import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitionOperatorComponent } from './partition-operator.component';

describe('PartitionOperatorComponent', () => {
  let component: PartitionOperatorComponent;
  let fixture: ComponentFixture<PartitionOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartitionOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartitionOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
