import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeOperatorComponent } from './materialize-operator.component';

describe('MaterializeOperatorComponent', () => {
  let component: MaterializeOperatorComponent;
  let fixture: ComponentFixture<MaterializeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterializeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
