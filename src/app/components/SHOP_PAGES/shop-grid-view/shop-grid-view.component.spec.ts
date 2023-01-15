import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridViewComponent } from './shop-grid-view.component';

describe('ShopGridViewComponent', () => {
  let component: ShopGridViewComponent;
  let fixture: ComponentFixture<ShopGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
