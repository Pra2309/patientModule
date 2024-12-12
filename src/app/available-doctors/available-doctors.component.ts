import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define a Slot interface for the slot objects
interface Slot {
  start: string;
  end: string;
  isAvailable: boolean;
  time: string;
}

@Component({
  selector: 'app-available-doctors',
  standalone: true,
  imports: [CommonModule],  // Ensure CommonModule is imported
  templateUrl: './available-doctors.component.html',
  styleUrls: ['./available-doctors.component.scss'],
})
export class AvailableDoctorsComponent {
  isSidebarOpen = false;
  isModalOpen = false;
  selectedDoctor: any = null;  // Declare selectedDoctor property

  // Define the doctors with specific availability for each
  doctors = [
    { date: '2024-12-07', specialty: 'Cardiology', name: 'Dr. John Doe', slots: [] as Slot[] },
    { date: '2024-12-07', specialty: 'Dermatology', name: 'Dr. Jane Smith', slots: [] as Slot[] },
    { date: '2024-12-08', specialty: 'Pediatrics', name: 'Dr. Emily White', slots: [] as Slot[] },
    { date: '2024-12-08', specialty: 'Orthopedics', name: 'Dr. James Brown', slots: [] as Slot[] },
  ];

  // Function to generate 15-minute time slots with a buffer for a specific doctor
  generateSlots(doctorDate: string, doctorName: string): Slot[] {
    const startTime = new Date(doctorDate + ' 12:00:00');  // Start at 12:00 PM
    const endTime = new Date(doctorDate + ' 17:00:00');   // Set end time at 5:00 PM
    const slots: Slot[] = [];

    // Get a specific availability pattern for each doctor
    let availabilityPattern = this.getAvailabilityPattern(doctorName);

    while (startTime < endTime) {
      const start = new Date(startTime);
      const end = new Date(startTime);
      end.setMinutes(startTime.getMinutes() + 15);  // Add 15 minutes to the start time

      slots.push({
        start: this.formatTime(start),
        end: this.formatTime(end),
        isAvailable: availabilityPattern.shift() ?? false,  // Use the availability pattern for the doctor
        time: `${this.formatTime(start)} - ${this.formatTime(end)}`,
      });

      startTime.setMinutes(startTime.getMinutes() + 30);  // Move the start time forward by 30 minutes for the next slot
    }
    return slots;
  }

  // Format the time to 12-hour format with AM/PM
  formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 === 0 ? 12 : hours % 12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    return formattedTime;
  }

  // Get a specific availability pattern for each doctor
  getAvailabilityPattern(doctorName: string): boolean[] {
    // Example: You can define specific availability patterns for each doctor here
    // True = Available, False = Unavailable
    switch (doctorName) {
      case 'Dr. John Doe':
        return [true, false, true, false, true, true, false, true, false, true, false, true, true];
      case 'Dr. Jane Smith':
        return [false, true, true, false, false, true, true, true, false, true, true, false];
      case 'Dr. Emily White':
        return [true, true, true, true, false, false, true, true, true, false, true, false];
      case 'Dr. James Brown':
        return [false, true, false, true, true, true, false, false, true, true, false, false];
      default:
        return [true, false, true, false, true, true, false, true];  // Default availability
    }
  }

  // Initialize available slots for each doctor when the component loads
  ngOnInit() {
    this.doctors.forEach(doctor => {
      doctor.slots = this.generateSlots(doctor.date, doctor.name);
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Update this method to assign the selected doctor when the "View Slots" button is clicked
  openSlotModal(doctor: any) {
    this.selectedDoctor = doctor;  // Assign the selected doctor to 'selectedDoctor' property
    this.isModalOpen = true;
    console.log(`Viewing slots for ${doctor.name} (${doctor.specialty}) on ${doctor.date}`);
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedDoctor = null;  // Reset the selected doctor when the modal is closed
  }

  selectSlot(slot: { time: string; isAvailable: boolean }) {
    if (slot.isAvailable) {
      alert(`You have selected the ${slot.time} slot.`);
      this.closeModal();
    } else {
      alert(`Sorry, the ${slot.time} slot is already booked.`);
    }
  }
}
