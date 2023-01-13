import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-left',
  templateUrl: './product-left.component.html',
  styleUrls: ['./product-left.component.scss']
})
export class ProductLeftComponent implements OnInit {

  value: number = 100;
  price: number = 0;
  cartValue: number = 1
  cartText: string = 'In Stock'

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if(value>=1000){
      this.value = Math.round(value);
    }
    return value;
  }

  increaseValue(){
    if(this.cartValue != null){
      this.cartValue++
      if (this.cartValue >= 10){
        this.cartText = 'Out Of Stock'
      }
      else {
        this.cartText = 'In Stock'
      }
    }
  }

  decreaseValue(){
    if (this.cartValue == null || this.cartValue == 1){
      return
    }else{
      this.cartValue--
      if (this.cartValue >= 10){
        this.cartText = 'Out Of Stock'
      }
      else {
        this.cartText = 'In Stock'
      }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
