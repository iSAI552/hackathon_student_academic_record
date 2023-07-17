import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student-list/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentId: number | undefined;
  student: Student | undefined;
  editedStudent: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentId = Number(params['id']);
      this.loadStudent();
    });
  }

  loadStudent() {
    if (this.studentId !== undefined) {
      this.student = this.studentService.getStudentById(this.studentId);
      if (this.student) {
        // Clone the student object to avoid changing the original student directly
        this.editedStudent = { ...this.student };
      }
    }
  }

  saveChanges() {
    if (this.editedStudent) {
      this.studentService.updateStudent(this.editedStudent);
      this.router.navigate(['/student-list']);
    }
  }
}
