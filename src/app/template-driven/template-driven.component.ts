import { Component, OnInit } from '@angular/core';
import {Book} from '../dto/book';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  bookModel: Book = {
    judulBuku: 'anjing',
    isbn: '',
    pengarang: '',
    penerbit: '',
    tebalHalaman: 0,
    alamatPenerbit: '',
    hargaEceran: 0,
    email: '',
    tahunTerbit: 0
  };

  componentDisplay!: string;

  constructor() {
    this.componentDisplay = 'FORM';
  }

  ngOnInit(): void {
  }

  setComponentDisplayed(component: string, data?: Book) {
    this.componentDisplay = component;
    if(data) {
      this.bookModel = Object.assign(data);
    }
  }

}
