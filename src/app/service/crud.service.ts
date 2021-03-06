import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {
  }

  retrieveAllEmployees(page, records): Observable<any> {
    return this.http.get(`http://localhost:9090/admin/getAllEmployeesWithDepartments/${page}/${records}`);
  }

  retrieveAllEmployeesWithSort(sortProperty, sortOrder, phrase, page, records): Observable<any> {
    return this.http
      .get(`http://localhost:9090/admin/getAllEmployeesWithDepartments/sortBy/${sortProperty}/${sortOrder}/${phrase}/${page}/${records}`);
  }

  createEmp(empl): Observable<any> {
    return this.http.post(`http://localhost:9090/admin/saveEmp`, empl);
  }

  createDepart(depart): Observable<any> {
    return this.http.post(`http://localhost:9090/admin/saveDep`, depart);
  }

  getOneEmployee(id): Observable<any> {
    return this.http.get(`http://localhost:9090/admin/getEmployeeById/${id}`);
  }

  getOneEmployeeDept(id): Observable<any> {
    return this.http.get(`http://localhost:9090/admin/getEmpDeptById/${id}`);
  }

  getDepartNames(): Observable<any> {
    return this.http.get(`http://localhost:9090/admin/getDepartmentNames`);
  }

  deleteEmployee(id): Observable<any> {
    return this.http.delete(`http://localhost:9090/admin/delete/${id}`);
  }

  updateEmpDept(id, emp): Observable<any> {
    console.log('im in updateEmp in service');
    return this.http.put(`http://localhost:9090/admin/updateEmpDept/${id}`, emp);
  }

  possibleDepts(id): Observable<any> {
    return this.http.get(`http://localhost:9090/admin/getDepartmentNamesExceptHavingByUser/${id}`);
  }

  register(user): Observable<any> {
    return this.http.post(`http://localhost:9090/createAndSaveUser`, user);
  }

  auth(): Observable<any> {
    return this.http.get(`http://localhost:9090/test`, {responseType: 'text'});
  }

  countPages(phrase): Observable<any> {
    return this.http.get(`http://localhost:9090/countPages/${phrase}`, {responseType: 'text'});
  }

  authUsername(): Observable<any> {
    return this.http.get(`http://localhost:9090/username`, {responseType: 'text'});
  }

  retrieveDataOfSpecyficUser(): Observable<any> {
    return this.http.get(`http://localhost:9090/user/getAllEmps`);
  }

  retrieveMyDepartment(): Observable<any> {
    return this.http.get(`http://localhost:9090/user/getMyDepts`);
  }

  search(phrase, page, records): Observable<any> {
    return this.http.get(`http://localhost:9090/admin/search/${phrase}/${page}/${records}`);
  }

}
