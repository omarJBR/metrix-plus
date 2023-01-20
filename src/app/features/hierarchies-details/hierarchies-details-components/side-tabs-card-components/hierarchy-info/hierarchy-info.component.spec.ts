import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyInfoComponent } from './hierarchy-info.component';

describe('HierarchyInfoComponent', () => {
  let component: HierarchyInfoComponent;
  let fixture: ComponentFixture<HierarchyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchyInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
