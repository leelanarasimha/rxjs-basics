import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeOnOperatorComponent } from './subscribe-on-operator.component';

describe('SubscribeOnOperatorComponent', () => {
  let component: SubscribeOnOperatorComponent;
  let fixture: ComponentFixture<SubscribeOnOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeOnOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeOnOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
