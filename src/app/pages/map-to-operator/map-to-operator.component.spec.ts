import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapToOperatorComponent } from './map-to-operator.component';

describe('MapToOperatorComponent', () => {
  let component: MapToOperatorComponent;
  let fixture: ComponentFixture<MapToOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapToOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapToOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
