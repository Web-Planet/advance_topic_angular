import { Component, OnInit } from '@angular/core';
import {User} from '../dto/user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  componentDisplay: string
  userModel: User = {
    fullName: '',
    address: '',
    gender: '',
    email: '',
    dob: ''
  }

  constructor() {
    this.componentDisplay = 'FORM'
  }

  ngOnInit(): void {
  }

  componentDisplayed(component: string, userData?: User) {
    this.componentDisplay = component;
    if (userData) {
      this.userModel = Object.assign(userData);
    }
  }
}
