import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AuthGuard } from './auth.guard';
import { FrontPageComponent } from './front-page/front-page.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/front-page', pathMatch: 'full' },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'login/teacher', component: LoginComponent },
  { path: 'login/student', component: StudentProfileComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'students/:id', component: StudentDetailsComponent, canActivate: [AuthGuard] },
  // Add other routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
