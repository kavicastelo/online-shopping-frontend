import { Component, OnInit } from '@angular/core';

interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-shop-right-sidebar',
  templateUrl: './shop-right-sidebar.component.html',
  styleUrls: ['./shop-right-sidebar.component.scss']
})
export class ShopRightSidebarComponent implements OnInit {

  sorts: Sort[] = [
    {value: 'popularity-0', viewValue: 'Sort by popularity'},
    {value: 'average-rating-1', viewValue: 'Sort by average rating'},
    {value: 'newness-2', viewValue: 'Sort by newness'},
    {value: 'low-to-high-2', viewValue: 'Sort by price : low to high'},
    {value: 'high-to-low-2', viewValue: 'Sort by : rice high to low'},
  ];
  selectedSort = this.sorts[0].value;


  listActive:boolean =true
  gridActive:boolean =false

  listClick(){
    this.listActive =! this.listActive;
    if (this.listActive){
      this.gridActive = false
    }
  }
  gridClick(){
    this.gridActive =! this.gridActive;
    if (this.gridActive){
      this.listActive = false
    }
  }


  value: number = 100;
  price: number = 0;

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if(value>=1000){
      this.value = Math.round(value);
    }
    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
