import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from '../../dto/book';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('bookForm') private bookForm: any;
  @Output() nextPage = new EventEmitter();
  isLoading = false;
  bookModel: Book = {
    judulBuku: '',
    isbn: '',
    pengarang: '',
    penerbit: '',
    tebalHalaman: 0,
    alamatPenerbit: '',
    hargaEceran: 0,
    email: '',
    tahunTerbit: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.bookModel = this.bookForm.value;
      this.nextPage.emit(this.bookModel);
    }, 3000);
  }
}
