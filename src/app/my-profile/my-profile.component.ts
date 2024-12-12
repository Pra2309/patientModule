import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Add this import for ngIf and ngFor

@Component({
  standalone: true,
  selector: 'app-user-profile-form',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class MyProfileComponent{
  name: string = '';
  medicalRecordNumber: string = '12345';
  email: string = '';
  dob: Date | null = null;
  gender: string = '';
  bloodGroup: string = '';
  address: string = '';
  phone: string = '';

  genders: string[] = ['Male', 'Female', 'Other'];
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  imageUrl: string | ArrayBuffer | null = null;


  onSubmit() {
    console.log('Form submitted:', {
      name: this.name,
      medicalRecordNumber: this.medicalRecordNumber,
      email: this.email,
      dob: this.dob,
      gender: this.gender,
      bloodGroup: this.bloodGroup,
      address: this.address,
      phone: this.phone
    });
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
}
