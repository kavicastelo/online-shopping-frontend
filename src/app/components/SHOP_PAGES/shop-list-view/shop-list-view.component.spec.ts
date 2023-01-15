import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListViewComponent } from './shop-list-view.component';

describe('ShopListViewComponent', () => {
  let component: ShopListViewComponent;
  let fixture: ComponentFixture<ShopListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
