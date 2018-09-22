import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  register = {
    first_name: '',
    last_name: '',
    email: '',
    sex: '',
    password: ''
  }
  state: string = 'cLogin';

  constructor() { }

  ngOnInit() {
  }

  changeState(state) {
    this.state = state;
  }

  customerRegister({value, valid}) {

  }

  customerLogin({value, valid}) {

  }

}
