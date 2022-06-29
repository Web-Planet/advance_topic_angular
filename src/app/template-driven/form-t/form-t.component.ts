import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {User} from '../../dto/user';

@Component({
  selector: 'app-form-t',
  templateUrl: './form-t.component.html',
  styleUrls: ['./form-t.component.scss']
})
export class FormTComponent implements OnInit {
  @ViewChild('userForm') userForm: any;
  @Output() nextPage = new EventEmitter();
  isLoading = false;

  userModel: User = {
    fullName: '',
    address: '',
    email: '',
    gender: '',
    dob: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.nextPage.emit(this.userForm.value);
    }, 2000);
  }
}
