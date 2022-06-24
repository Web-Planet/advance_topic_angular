import { Component, OnInit } from '@angular/core';
import {Book} from '../dto/book';
import {User} from '../dto/user';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveComponent implements OnInit {
  componentDisplay!: string;
  user: User = {
    fullName: '',
    gender: '',
    dob: '',
    address: '',
    email: ''
  }

  constructor() {
    this.componentDisplay = 'FORM';
  }

  ngOnInit(): void {
  }

  setComponentDisplayed(component: string, data?: Book) {
    this.componentDisplay = component;
    if(data) {
      this.user = Object.assign(data);
    }
  }
}
