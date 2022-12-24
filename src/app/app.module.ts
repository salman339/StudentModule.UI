import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { PopupComponent } from './popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientInMemoryWebApiModule,
  InMemoryWebApiModule,
} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { StudentsService } from './services/students.service';
import { ToastrModule } from 'ngx-toastr';
import { NotifiersComponent } from './notifiers/notifiers.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './allstudents/filter-pipe.pipe';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AllstudentsComponent,
    PopupComponent,
    NotifiersComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    // HttpClientInMemoryWebApiModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    ToastrModule.forRoot({}),
  ],
  providers: [StudentsService, NgbModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
