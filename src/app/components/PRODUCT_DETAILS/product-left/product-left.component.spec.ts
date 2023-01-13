import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLeftComponent } from './product-left.component';

describe('ProductLeftComponent', () => {
  let component: ProductLeftComponent;
  let fixture: ComponentFixture<ProductLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
