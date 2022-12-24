import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { StudentsService } from '../services/students.service';
import { ToastrService } from 'ngx-toastr';
import { NotifiersService } from '../services/notifiers.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  closeResult = '';
  faCalendar = faCalendar;
  errorMessage = '';
  errorClass = '';
  saveStudentResponse: any = '';
  editData: any;
  modalReference: any;
  dateOfBirth: Date = new Date();
  id: any;
  editId: any;

  constructor(
    private modalService: NgbModal,
    private studentApiService: StudentsService,
    private toast: NotifiersService
  ) {}

  @ViewChild('content') addview!: ElementRef;
  ngOnInit(): void {}

  loadEditData(id: any) {
    this.open();
    this.studentApiService.getStudentByID(id).subscribe((result) => {
      this.editData = result;
      console.log(this.editData);
      console.log('above request');
      // console.log(
      //   new Date(this.editData.dateOfBirth).toISOString().split('T')[0]
      // );
      this.editData.dateOfBirth = new Date(this.editData.dateOfBirth)
        .toISOString()
        .split('T')[0];
      // this.dateofBirth = new Date(
      //   this.editData.dateOfBirth
      // ).toLocaleDateString();
      // console.log(this.dateofBirth);

      // this.studentForm.patchValue(result);

      this.studentForm.setValue({
        id: this.editData.id,
        firstName: this.editData.firstName,
        lastName: this.editData.lastName,
        email: this.editData.email,
        dateOfBirth: this.editData.dateOfBirth,
      });
    });

    // yahan se maine id bhejni hai
  }

  ClearForm() {
    this.studentForm.setValue({
      id: '00000000-0000-0000-0000-000000000000',
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
    });
  }

  open() {
    this.ClearForm();
    this.modalService
      .open(this.addview, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  studentForm = new FormGroup({
    id: new FormControl({
      value: '00000000-0000-0000-0000-000000000000',
      disabled: true,
    }),
    firstName: new FormControl('', Validators.compose([Validators.required])),
    lastName: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    dateOfBirth: new FormControl(this.dateOfBirth.toISOString().split('T')[0]),
    // dateOfBirth: new FormControl(
    //   formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    //   Validators.compose([Validators.required])
    // ),
  });

  saveStudent() {
    if (this.studentForm.valid) {
      // alert('yes valid');
      this.editId = this.studentForm.getRawValue().id;
      console.log('Id Showing');
      console.log(this.editId);
      if (this.editId == '00000000-0000-0000-0000-000000000000') {
        this.studentApiService
          .addNewStudent(this.studentForm.getRawValue())
          .subscribe(
            (result) => {
              this.saveStudentResponse = result;
              // console.log('result response' + this.saveStudentResponse);
              this.modalService.dismissAll();
              this.toast.showSuccess('Data Saved Successfully!', 'Success');
            },
            (error) => {
              this.toast.showError('Failed to save!', 'Failed');
            }
          );
      } else {
        this.studentApiService
          .editStudent(this.studentForm.getRawValue())
          .subscribe(
            (result) => {
              this.saveStudentResponse = result;
              // console.log('result response' + this.saveStudentResponse);
              this.modalService.dismissAll();
              this.toast.showSuccess('Data Saved Successfully!', 'Success');
            },
            (error) => {
              this.toast.showError('Failed to save!', 'Failed');
            }
          );
      }

      this.errorMessage = '';
      this.errorClass = '';
    } else {
      this.errorMessage = 'Please enter valid data';
      this.errorClass = 'error-message';
      this.toast.showWarning('Please fill the form!', 'Invalid Form');
    }
  }

  // for the validation we will use these functions
  get firstName() {
    return this.studentForm.get('firstName');
  }
  get lastName() {
    return this.studentForm.get('lastName');
  }
  get email() {
    return this.studentForm.get('email');
  }
  // get dateOfBirth() {
  //   return this.studentForm.get('dateOfBirth');
  // }
  // End : for the validation we will use these functions
}
