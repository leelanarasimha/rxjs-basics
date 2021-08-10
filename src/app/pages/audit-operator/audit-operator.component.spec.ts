import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditOperatorComponent } from './audit-operator.component';

describe('AuditOperatorComponent', () => {
  let component: AuditOperatorComponent;
  let fixture: ComponentFixture<AuditOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
