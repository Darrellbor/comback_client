import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  register = {
    first_name: '',
    last_name: '',
    email: '',
    sex: '',
    password: '',
    priviledge: 'Admin',
    bus_name: ''
  }
  staff = {
    email: '',
    password: ''
  }
  state: string = 'cAdmin';

  constructor() { }

  ngOnInit() {
  }

  changeState(state) {
    this.state = state;
  }

  busAdminLogin({value, valid}) {

  }

  busAdminRegister({value, valid}) {

  }

  staffLogin({value, valid}) {

  }

}
