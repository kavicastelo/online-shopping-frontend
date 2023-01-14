import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

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

  descActive:boolean =true
  infoActive:boolean =false
  reviewActive:boolean =false

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  messageFormControl = new FormControl('', [Validators.required]);

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

  descClick(){
    this.descActive =! this.descActive;
    if (this.descActive){
      this.infoActive = false
      this.reviewActive = false
    }
  }
  infoClick(){
    this.infoActive =! this.infoActive;
    if (this.infoActive){
      this.descActive = false
      this.reviewActive = false
    }
  }
  reviewClick(){
    this.reviewActive =! this.reviewActive;
    if (this.reviewActive){
      this.descActive = false
      this.infoActive = false
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
