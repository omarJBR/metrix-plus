import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedObjectsComponent } from './linked-objects.component';

describe('LinkedObjectsComponent', () => {
  let component: LinkedObjectsComponent;
  let fixture: ComponentFixture<LinkedObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedObjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
