// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { StudentService } from '../student-list/student.service';
// import { Student } from '../student';
// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.css']
// })
// export class StudentListComponent implements OnInit {
//   students: Student[] = [];
//   filteredStudents: Student[] = [];
//   filterStudentId: string = '';
//   filterSubject1: number | undefined;
//   filterSubject2: number | undefined;
//   filterSubject3: number | undefined;

//   // constructor(private studentService: StudentService, private router: Router) { }
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private studentService: StudentService
//   ) { }

//   ngOnInit(): void {
//     this.loadStudents();
//   }

//   loadStudents() {
//     this.students = this.studentService.getStudents();
//     this.filteredStudents = this.students;
//   }


//   // Filtering students based on student id and subject marks
//   filterStudents() {
//     this.filteredStudents = this.students.filter((student) => {
//       const subject1Pass = this.filterSubject1 === undefined || student.marksSubject1 >= this.filterSubject1;
//       const subject2Pass = this.filterSubject2 === undefined || student.marksSubject2 >= this.filterSubject2;
//       const subject3Pass = this.filterSubject3 === undefined || student.marksSubject3 >= this.filterSubject3;

//       const studentIdLowerCase = student.id.toString().toLowerCase();
//       const filterStudentIdLowerCase = this.filterStudentId.toLowerCase();

//       return (
//         studentIdLowerCase.includes(filterStudentIdLowerCase) &&
//         subject1Pass &&
//         subject2Pass &&
//         subject3Pass
//       );
//     });
//   }

//   // Function to handle editing a student's information
//   editStudent(student: Student) {
//     this.router.navigate(['/edit-student', student.id]);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// // import { StudentService } from './services/student.service'; // Make sure to import the correct service path
// import { StudentService } from '../student-list/student.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Student } from '../student'; // Make sure to import the correct model path

// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.css']
// })
// export class StudentListComponent implements OnInit {
//   students: Student[] = [];
//   filteredStudents: Student[] = [];
//   filterStudentId: number | undefined;
//   filterSubject1: number | undefined;
//   filterSubject2: number | undefined;
//   filterSubject3: number | undefined;

//   // constructor(private studentService: StudentService) {}

//   constructor(
//         private route: ActivatedRoute,
//         private router: Router,
//         private studentService: StudentService
//       ) { }

//   ngOnInit(): void {
//     this.loadStudents();
//     this.filterStudents();
//   }

//   loadStudents() {
//     this.students = this.studentService.getStudents();
//     // this.filteredStudents = this.students;
//     this.filterStudents();
//   }

//   // Filtering students based on student id and subject marks
//   filterStudents() {

//     if (this.filterStudentId === undefined &&
//       this.filterSubject1 === undefined &&
//       this.filterSubject2 === undefined &&
//       this.filterSubject3 === undefined) {
//     // If all filter inputs are empty, show all students
//     this.filteredStudents = this.students;
//     return;
//   }

//     this.filteredStudents = this.students.filter((student) => {
//       const subject1Pass = this.filterSubject1 === undefined || student.marksSubject1 == this.filterSubject1;
//       const subject2Pass = this.filterSubject2 === undefined || student.marksSubject2 == this.filterSubject2;
//       const subject3Pass = this.filterSubject3 === undefined || student.marksSubject3 == this.filterSubject3;

//       return (
//         (this.filterStudentId === undefined || student.id === this.filterStudentId) &&
//         subject1Pass &&
//         subject2Pass &&
//         subject3Pass
//       );
//     });
//   }

//   // Function to handle editing a student's information
//   editStudent(student: Student) {
//     // Implement your edit logic here, e.g., navigating to edit page
//     this.router.navigate(['/edit-student', student.id]);
//     console.log('Edit student:', student);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-list/student.service';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { Student } from '../student'; // Make sure to import the correct model path

// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.css']
// })
// export class StudentListComponent implements OnInit {
//   students: Student[] = [];
//   filteredStudents: Student[] = [];
//   filterStudentId: number | undefined;
//   filterSubject1: number | undefined;
//   filterSubject2: number | undefined;
//   filterSubject3: number | undefined;

//   constructor(private studentService: StudentService) {}

//   ngOnInit(): void {
//     this.loadStudents()
//   }

//   loadStudents() {
//     this.students = this.studentService.getStudents();
//     this.filterStudents(); // Call the filterStudents method initially to show all students
//   }

//   // Filtering students based on student id and subject marks
//   filterStudents() {
//     if (
//       (this.filterStudentId === undefined || this.filterStudentId ==null) &&
//       (this.filterSubject1 === undefined || this.filterSubject1 ==null) &&
//       (this.filterSubject2 === undefined || this.filterSubject2 ==null) &&
//       (this.filterSubject3 === undefined || this.filterSubject3 ==null)
//     ) {
//       // If all filter inputs are empty, show all students
//       this.filteredStudents = this.students;
//       console.log("mai chal raha bhai")
//       return;
//     }
//     console.log('else chal raha hai')
//     this.filteredStudents = this.students.filter((student) => {
//       const subject1Pass = this.filterSubject1 === undefined || this.filterStudentId ==null || student.marksSubject1 === this.filterSubject1;
//       const subject2Pass = this.filterSubject2 === undefined || this.filterSubject2 ==null || student.marksSubject2 === this.filterSubject2;
//       const subject3Pass = this.filterSubject3 === undefined || this.filterSubject3 ==null || student.marksSubject3 === this.filterSubject3;
//       return (
//         (this.filterStudentId === undefined || student.id === this.filterStudentId) &&
//         subject1Pass &&
//         subject2Pass &&
//         subject3Pass
//       );
//     });
//   }

//   // Function to handle editing a student's information
//   editStudent(student: Student) {

//     // Implement your edit logic here, e.g., navigating to edit page
//     console.log('Edit student:', student);
//   }
// }


// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.css']
// })
// export class StudentListComponent implements OnInit {
//   students: Student[] = [];
//   filteredStudents: Student[] = [];
//   filterStudentId: number | undefined;
//   filterSubject1: number | undefined;
//   filterSubject2: number | undefined;
//   filterSubject3: number | undefined;

//   constructor(
//     private studentService: StudentService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     // Subscribe to the NavigationEnd event to reset filters on component load
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         this.resetFilters();
//         this.loadStudents();
//       }
//     });
//   }

//   ngOnInit(): void {
//     this.resetFilters();
//     this.loadStudents();
//   }

//   resetFilters() {
//     this.filterStudentId = undefined;
//     this.filterSubject1 = undefined;
//     this.filterSubject2 = undefined;
//     this.filterSubject3 = undefined;
//   }

//   loadStudents() {
//     this.students = this.studentService.getStudents();
//     this.filterStudents();
//   }

//   // Filtering students based on student id and subject marks
//   filterStudents() {
//     if (
//       this.filterStudentId === undefined &&
//       this.filterSubject1 === undefined &&
//       this.filterSubject2 === undefined &&
//       this.filterSubject3 === undefined
//     ) {
//       // If all filter inputs are empty, show all students
//       this.filteredStudents = this.students;
//       return;
//     }

//     this.filteredStudents = this.students.filter((student) => {
//       const subject1Pass =
//         this.filterSubject1 === undefined || student.marksSubject1 === this.filterSubject1;
//       const subject2Pass =
//         this.filterSubject2 === undefined || student.marksSubject2 === this.filterSubject2;
//       const subject3Pass =
//         this.filterSubject3 === undefined || student.marksSubject3 === this.filterSubject3;
//       return (
//         (this.filterStudentId === undefined || student.id === this.filterStudentId) &&
//         subject1Pass &&
//         subject2Pass &&
//         subject3Pass
//       );
//     });
//   }

//   // Function to handle editing a student's information
//   editStudent(student: Student) {
//     // Implement your edit logic here, e.g., navigating to edit page
//     console.log('Edit student:', student);
//   }
// }


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = []; // Modify this array to include the new fields

  // New properties to hold filter values for each subject and student ID
  filterSubject1: number | null = null;
  filterSubject2: number | null = null;
  filterSubject3: number | null = null;
  filterStudentId: number | null = null; // Add the new property for student ID filter

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router


  ) {
    // Remove StudentService from the constructor, since it is not used
    // If you were previously fetching students from a service, you can replace it with hardcoded data or a mock.
    // For now, let's assume you have hardcoded data for students:
    this.students = [
      {
        id: 1,
        name: 'John Doe',
        age: 20,
        gender: 'Male',
        email: 'john.doe@example.com',
        marksSubject1: 80,
        marksSubject2: 85,
        marksSubject3: 90
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 22,
        gender: 'Female',
        email: 'jane.smith@example.com',
        marksSubject1: 75,
        marksSubject2: 88,
        marksSubject3: 78
      },
      // Add more students here as needed
    ];
  }

  // Add getter method for filtered students
  get filteredStudents(): Student[] {
    return this.students.filter((student) =>
      this.filterStudents(student)
    );
  }

  // Method to filter students based on the filter values
  filterStudents(student: Student): boolean {
    return (
      (this.filterSubject1 === null || student.marksSubject1 === this.filterSubject1) &&
      (this.filterSubject2 === null || student.marksSubject2 === this.filterSubject2) &&
      (this.filterSubject3 === null || student.marksSubject3 === this.filterSubject3) &&
      (this.filterStudentId === null || student.id === this.filterStudentId) // Filter by student ID
    );
  }

  editStudent(student: Student) {
        // Implement your edit logic here, e.g., navigating to edit page
        this.router.navigate(['/edit-student', student.id]);
        console.log('Edit student:', student);
      }

}
