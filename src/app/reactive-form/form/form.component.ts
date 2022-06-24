import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  @Output() nextPage = new EventEmitter();
  userForm: FormGroup;
  isLoading = false;

  constructor() {
    this.userForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.nextPage.emit(this.userForm.value);
    }, 3000);
  }

}
