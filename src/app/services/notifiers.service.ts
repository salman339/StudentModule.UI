import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotifiersService {
  constructor(private toast: ToastrService) {}

  showSuccess(title: any, message: any) {
    this.toast.success(title, message);
  }
  showError(title: any, message: any) {
    this.toast.error(title, message);
  }
  showWarning(title: any, message: any) {
    this.toast.warning(title, message);
  }
}
