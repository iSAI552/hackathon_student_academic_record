import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
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

  constructor() {}

  // Method to get all students
  getStudents(): Student[] {
    return this.students;
  }

  // Method to get a student by ID
  getStudentById(id: number): Student | undefined {
    return this.students.find((student) => student.id === id);
  }

  // Method to add a new student
  addStudent(student: Student): void {
    this.students.push(student);
  }

  // Method to update an existing student
  updateStudent(student: Student): void {
    const index = this.students.findIndex((s) => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
    }
  }

  // Method to delete a student by ID
  deleteStudent(id: number): void {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
