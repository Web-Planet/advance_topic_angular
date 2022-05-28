import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  employeeId!: number;
  employeeData: Employee = {
    id: 0,
    name: '',
    address: ''
  };

  constructor(private service: EmployeeService,
              private route: Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.actRoute.snapshot.params['id'];
    this.getEmployeeById(this.employeeId);
  }

  getEmployeeById(id: number) {
    this.service.getEmployeeById(id).subscribe((data) => {
      this.employeeData = data;
      console.log(this.employeeData);
    })
  }

  updateEmployee() {
    if (window.confirm('Anda sudah yakin dengan perubahan data nya ? ')) {
      this.service.updateEmployee(this.employeeId, this.employeeData).subscribe(() => {
        this.route.navigate(['/list'])
      })
    }
  }

}
