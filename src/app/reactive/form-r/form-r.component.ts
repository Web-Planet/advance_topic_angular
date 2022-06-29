import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-r',
  templateUrl: './form-r.component.html',
  styleUrls: ['./form-r.component.scss']
})
export class FormRComponent implements OnInit {
  @Output() nextPage = new EventEmitter();
  bookForms: FormGroup;
  isLoading = false;

  constructor() {
    this.bookForms = new FormGroup({
      judul: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      tebalHalaman: new FormControl(0, [Validators.required]),
      tahunTerbit: new FormControl(0, [Validators.required]),
      hargaEceran: new FormControl(0, [Validators.required]),
      namaPengarang: new FormControl('', [Validators.required]),
      namaPenerbit: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.bookForms.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.nextPage.emit(this.bookForms.value);
      }, 2000);
    } else {
      console.log('ada yang ga valid');
    }
  }
}
