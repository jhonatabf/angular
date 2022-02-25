import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { Hospital } from 'src/app/shared/models/hospital.model';
import { GetUsersService } from 'src/app/shared/services/get-users.service';
import { GetHospitalService } from 'src/app/shared/services/get-hospital.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css'],
})
export class GetUsersComponent implements OnInit {
  userList: any;
  hospitalList: Hospital[];
  eventoHospital: boolean = false;
  selectedHospital: string = '0';
  hospitalControl: FormControl;

  constructor(
    public userService: GetUsersService,
    public hospService: GetHospitalService
  ) {}

  ngOnInit(): void {
    this.getHospList();
  }

  getUserList(name: string) {
    this.hospitalControl = new FormControl('', Validators.required);
    //if (this.selectedHospital != '0' && this.eventoHospital == true) {
      this.userService
        .listUsers(name, this.selectedHospital)
        .subscribe((data) => {
          this.userList = data;
          console.log(name);
        });
    //} else {
    //  console.log(this.selectedHospital);
    //  console.log(name);
    //}
  }

  getHospList() {
    this.hospService.listHospital().subscribe((data) => {
      this.hospitalList = data.hospitals;
    });
  }

  onChangeHospital(eventName: string) {
    this.selectedHospital = eventName;
    this.eventoHospital = true;
    console.log(eventName);
  }
}
