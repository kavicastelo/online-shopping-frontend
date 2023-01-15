import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRightSidebarComponent } from './shop-right-sidebar.component';

describe('ShopRightSidebarComponent', () => {
  let component: ShopRightSidebarComponent;
  let fixture: ComponentFixture<ShopRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopRightSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
