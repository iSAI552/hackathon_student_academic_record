import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component'; // Check the path for StudentListComponent
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FrontPageComponent,
    StudentListComponent,
    StudentDetailsComponent, FrontPageComponent, EditStudentComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
