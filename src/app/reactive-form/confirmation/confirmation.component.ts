import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../dto/user';

@Component({
  selector: 'app-reactive-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ReactiveConfirmationComponent implements OnInit {
  @Input() user!: User;
  @Output() backToForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
    if (this.user.gender === 'male') {
      this.user.gender = 'Laki - laki'
    } else {
      this.user.gender = 'Perempuan'
    }
  }

  backtoForm(event: any) {
    this.backToForm.emit(event);
  }
}
