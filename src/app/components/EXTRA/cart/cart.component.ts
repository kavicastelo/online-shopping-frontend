import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartValue: number = 1
  cartText: string = 'In Stock'

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

  constructor() { }

  ngOnInit(): void {
  }

}
