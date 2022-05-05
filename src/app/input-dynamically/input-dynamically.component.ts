import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-dynamically',
  templateUrl: './input-dynamically.component.html',
  styleUrls: ['./input-dynamically.component.scss']
})
export class InputDynamicallyComponent implements OnInit {

  public addresses: any[] = [{
    id: 1,
    address: '',
    street: '',
    city: '',
    country: ''
  }];
  constructor() {

  }

  ngOnInit() {

  }

  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }
}