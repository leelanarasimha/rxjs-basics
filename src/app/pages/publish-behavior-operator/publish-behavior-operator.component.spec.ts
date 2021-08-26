import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishBehaviorOperatorComponent } from './publish-behavior-operator.component';

describe('PublishBehaviorOperatorComponent', () => {
  let component: PublishBehaviorOperatorComponent;
  let fixture: ComponentFixture<PublishBehaviorOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishBehaviorOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishBehaviorOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
