import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTabsCardComponent } from './side-tabs-card.component';

describe('SideTabsCardComponent', () => {
  let component: SideTabsCardComponent;
  let fixture: ComponentFixture<SideTabsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideTabsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTabsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
