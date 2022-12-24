import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifiers',
  templateUrl: './notifiers.component.html',
  styleUrls: ['./notifiers.component.css'],
})
export class NotifiersComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Student Added Successfully!');
  }
}
