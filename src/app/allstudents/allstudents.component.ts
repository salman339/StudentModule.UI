import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { student } from '../services/student';
import { StudentsService } from '../services/students.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NotifiersService } from '../services/notifiers.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css'],
})
export class AllstudentsComponent implements AfterViewInit {
  allStudentList: student[] = [];
  editIcon = faEdit;
  deleteIcon = faTrash;
  page = 1;
  pageSize = 5;
  filterString = '';
  collectionLength: number = 0;

  // _filterText: string = '';
  // filteredStudents: student[] = [];

  // get filterText() {
  //   return this._filterText;
  // }
  constructor(
    private studentService: StudentsService,
    private toast: NotifiersService
  ) {
    this.getStudentsall();
    this.studentService.refreshedRequired.subscribe((result) => {
      this.getStudentsall();
    });
  }
  ngAfterViewInit(): void {}

  @ViewChild(PopupComponent) popupcomp!: PopupComponent;

  editStudent(id: any) {
    this.popupcomp.loadEditData(id);
  }

  getStudentsall() {
    this.studentService.getAllStudents().subscribe((result) => {
      this.allStudentList = result;
      console.log(this.allStudentList.length);
      this.collectionLength = this.allStudentList.length;
    });
  }

  deleteStudent(id: any) {
    console.log(id);
    if (confirm('Are you sure, to delete the student?')) {
      this.studentService.removeStudent(id).subscribe((result) => {
        this.getStudentsall();
        this.toast.showSuccess('Student Deleted Successfully!', 'Success');
      });
    }
  }

  get filterstring() {
    return this.filterString;
  }

  searchChange(event: any) {
    this.page = 1;
    console.log(this.allStudentList.length);
    // this.collectionLength = this..length;
  }
}
