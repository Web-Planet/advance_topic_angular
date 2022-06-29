import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../dto/book';

@Component({
  selector: 'app-detail-r',
  templateUrl: './detail-r.component.html',
  styleUrls: ['./detail-r.component.scss']
})
export class DetailRComponent implements OnInit {
  @Input() bookData!: Book;
  @Output() backPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  backtoForm() {
    this.backPage.emit();
  }
}
