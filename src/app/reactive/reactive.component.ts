import { Component, OnInit } from '@angular/core';
import {Book} from '../dto/book';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  componentDisplayed: string;
  bookModel: Book = {
    judul: '',
    isbn: '',
    tebalHalaman: 0,
    hargaEceran: 0,
    tahunTerbit: 0,
    namaPengarang: '',
    namaPenerbit: ''
  }

  constructor() {
    this.componentDisplayed = 'FORM';
  }

  ngOnInit(): void {
  }

  setComponentDisplayed(component: string, bookData?: Book) {
    this.componentDisplayed = component;
    if(bookData) {
      this.bookModel = Object.assign(bookData);
    }
  }
}
