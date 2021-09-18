import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupByOperatorComponent } from './group-by-operator.component';

describe('GroupByOperatorComponent', () => {
  let component: GroupByOperatorComponent;
  let fixture: ComponentFixture<GroupByOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupByOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupByOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
