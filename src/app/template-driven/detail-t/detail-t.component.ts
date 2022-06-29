import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../dto/user';

@Component({
  selector: 'app-detail-t',
  templateUrl: './detail-t.component.html',
  styleUrls: ['./detail-t.component.scss']
})
export class DetailTComponent implements OnInit {
  @Input() userData!: User;
  @Output() backForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.userData);
  }

  backtoForm() {
    this.backForm.emit();
  }
}
