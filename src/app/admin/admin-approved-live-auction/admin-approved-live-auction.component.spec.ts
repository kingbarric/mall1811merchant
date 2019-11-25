import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovedLiveAuctionComponent } from './admin-approved-live-auction.component';

describe('AdminApprovedLiveAuctionComponent', () => {
  let component: AdminApprovedLiveAuctionComponent;
  let fixture: ComponentFixture<AdminApprovedLiveAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApprovedLiveAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApprovedLiveAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
