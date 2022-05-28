import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: any = [];

  constructor(private service: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.service.getEmployee().subscribe((val) => {
      this.employees = val;
      console.log(this.employees);
    });
  }

  deleteEmployee(id: number) {
    if (window.confirm('Apakah Anda yakin data ingin dihapus?')) {
      this.service.deleteEmployee(id).subscribe(() => {
        this.getAllEmployee();
      });
    }
  }
}
