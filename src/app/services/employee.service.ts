import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../model/employee';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getEmployee(): Observable<Employee> {
    return this.http
      .get<Employee>(environment.baseUrl + '/employees')
      .pipe(retry(1), catchError(this.handleError));
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http
      .get<Employee>(environment.baseUrl + '/employees/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(environment.baseUrl + '/employees', JSON.stringify(employee), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http
      .put<Employee>(environment.baseUrl + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http
      .delete<Employee>(environment.baseUrl + '/employees/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code : ${error.status}\n Error message : ${error.message}`;
    }
    window.alert(errorMessage);

    return throwError(() => {
      return errorMessage;
    });
  }
}
