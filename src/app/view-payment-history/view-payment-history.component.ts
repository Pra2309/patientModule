import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-payment-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-payment-history.component.html',
  styleUrls: ['./view-payment-history.component.scss']
})
export class ViewPaymentHistoryComponent {
  isSidebarOpen = false;

  // Set a budget limit (example: ₹15000)
  budgetLimit = 15000;

  // List of payments
  payments = [
    {
      paymentId: 'P001',
      dateOfPayment: '1/12/2024',
      paymentMode: 'UPI',
      amountPaid: 300,
      status: 'Paid',
      purpose: 'Consultation',
      remarks: 'Paid in full',
    },
    {
      paymentId: 'P002',
      dateOfPayment: '2/12/2024',
      paymentMode: 'Credit Card',
      amountPaid: 50000,
      status: 'Paid',
      purpose: 'Surgery',
      remarks: 'Paid in full',
    },
    {
      paymentId: 'P003',
      dateOfPayment: '3/12/2024',
      paymentMode: 'Cash',
      amountPaid: 2000,
      status: 'Paid',
      purpose: 'Lab Tests',
      remarks: 'N.A.',
    },
    {
      paymentId: 'P004',
      dateOfPayment: '4/12/2024',
      paymentMode: 'Debit Card',
      amountPaid: 600,
      status: 'Failed',
      purpose: 'Pharmacy',
      remarks: 'Failed payment',
    }
  ];

  // Method to calculate the total amount paid
  get totalAmount(): number {
    return this.payments.reduce((total, payment) => total + payment.amountPaid, 0);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
