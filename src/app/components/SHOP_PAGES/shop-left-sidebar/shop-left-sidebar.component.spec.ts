import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLeftSidebarComponent } from './shop-left-sidebar.component';

describe('ShopLeftSidebarComponent', () => {
  let component: ShopLeftSidebarComponent;
  let fixture: ComponentFixture<ShopLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopLeftSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
