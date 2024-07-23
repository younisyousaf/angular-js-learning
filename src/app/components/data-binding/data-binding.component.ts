import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // In TypeScript there are four types of data types
  //string, number, boolean, date

  courseName: string = 'Angular 18';
  rollNo: number = 56954;
  currentDate: Date = new Date();

  myClassName: string = 'text-dark';
  btnClassName: string = 'btn btn-primary';
  myStateName: string = 'Khyber Pakhtunkhwa';
  myName = signal('Younis Khan');

  constructor() {
    // where this points to the current class
    // this.courseName = 'Angular 18 Learning';
  }
  count = 0;
  changeName() {
    this.myName.set('Younis Yousaf');
  }

  increment() {
    this.count++;
  }
  reset() {
    this.count = 0;
  }

  showAlert(message: string) {
    alert(message);
  }

  changeCourseName() {
    this.courseName = 'React JS';
  }
  resetCourseName() {
    this.courseName = 'Angular 18';
  }
}
