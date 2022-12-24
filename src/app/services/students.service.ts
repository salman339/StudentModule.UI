import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private _refreshRequired = new Subject<void>();

  get refreshedRequired() {
    return this._refreshRequired;
  }

  // studentsApiUrl = '/api/studentsData';

  studentsApiUrl = 'https://localhost:7169';

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<student[]> {
    return this.http.get<student[]>(this.studentsApiUrl + '/students');
  }

  addNewStudent(inputData: any) {
    console.log(inputData);
    return this.http.post(this.studentsApiUrl + '/Students', inputData).pipe(
      tap(() => {
        this._refreshRequired.next();
      })
    );
  }

  editStudent(inputData: any) {
    console.log(inputData);
    return this.http
      .put(this.studentsApiUrl + '/Students/' + inputData.id, inputData)
      .pipe(
        tap(() => {
          this._refreshRequired.next();
        })
      );
  }
  getStudentByID(ID: any) {
    return this.http.get(this.studentsApiUrl + '/students/' + ID);
  }

  removeStudent(ID: any) {
    return this.http.delete(this.studentsApiUrl + '/Students/' + ID);
  }
}
