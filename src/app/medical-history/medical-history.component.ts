import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if you need it

@Component({
  selector: 'app-view-medical-history',
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule],  // Import CommonModule
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss'],
})
export class ViewMedicalHistoryComponent {
  // Define the property to track if the sidebar is open
  isSidebarOpen = false;

  // Define the method to toggle the sidebar's state
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Define patientId and patientName properties
  patientId: string = 'P12345';  // Example patient ID
  patientName: string = 'John Doe';  // Example patient name

  // Your existing medicalHistory data...
  medicalHistory = {
    medicalSurgicalHistory: 'N.A.',
    familyHistory: 'N.A.',
    allergies: 'N.A.',
    admissionDateTime: '10/11/2024 10:30:00 AM',
    principalDoctor: 'Dr. Kyle Lee',
    reasonForAdmission: 'Vomiting and diarrhea',
    principalDiagnosis: 'Gastroenteritis',
    secondaryDiagnosis: 'N.A.',
    otherDiagnosis: 'N.A.',
    operationProcedures: 'N.A.',
  };
}
