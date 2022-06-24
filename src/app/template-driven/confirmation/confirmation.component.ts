import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../dto/book';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  @Input() books!: Book;
  @Output() backToForm = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.books);
    console.log(this.books.tahunTerbit);
  }

  backtoForm(event: any) {
    this.backToForm.emit(event);
  }
}
