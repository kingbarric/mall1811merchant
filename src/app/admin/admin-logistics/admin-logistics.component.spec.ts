import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogisticsComponent } from './admin-logistics.component';

describe('AdminLogisticsComponent', () => {
  let component: AdminLogisticsComponent;
  let fixture: ComponentFixture<AdminLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
