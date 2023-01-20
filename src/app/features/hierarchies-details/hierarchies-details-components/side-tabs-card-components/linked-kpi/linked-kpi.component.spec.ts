import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedKpiComponent } from './linked-kpi.component';

describe('LinkedKpiComponent', () => {
  let component: LinkedKpiComponent;
  let fixture: ComponentFixture<LinkedKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedKpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
