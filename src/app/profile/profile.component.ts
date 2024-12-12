import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Add this import for ngIf and ngFor
import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  
})export class ProfileComponent implements OnInit {
  name: string = '';
  medicalRecordNumber: string = '12345';
  email: string = '';
  dob: Date | null = null;
  gender: string = '';
  bloodGroup: string = '';
  address: string = '';
  phone: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  age !: number;

  genders: string[] = ['Male', 'Female', 'Other'];
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  onSubmit() {
    if (this.age < 0 || this.age > 99) {
      alert('Age must be between 0 and 99');
      return;
    }
    else{
      
    
    console.log('Form submitted:', {
      name: this.name,
      medicalRecordNumber: this.medicalRecordNumber,
      email: this.email,
      dob: this.dob,
      gender: this.gender,
      bloodGroup: this.bloodGroup,
      address: this.address,
      phone: this.phone,
      age: this.age,
    });
  }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Optional: You can still calculate age based on DOB, but if it's manually entered in the "Age" field, you may not need this.
  calculateAge(): number | null {
    if (this.dob) {
      const today = new Date();
      const birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth();
      const day = today.getDate();

      // Adjust age if the birthday hasn't occurred yet this year
      if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
        age--;
      }

      return age;
    }
    return null;
  }

  ngOnInit(): void {}
}
