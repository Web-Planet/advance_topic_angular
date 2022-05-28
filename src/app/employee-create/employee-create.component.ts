import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Router} from '@angular/router';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee = {
    id: 0,
    name: '',
    address: ''
  };

  constructor(private service: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addNewEmployee(person: Employee) {
    return this.service.addEmployee(person).subscribe(() => {
      this.router.navigate(['/list'])
    })
  }

}
