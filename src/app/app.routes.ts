// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AvailableDoctorsComponent } from './available-doctors/available-doctors.component';
import { ViewMedicalHistoryComponent } from './medical-history/medical-history.component';
import { ViewPaymentHistoryComponent } from './view-payment-history/view-payment-history.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { profile } from 'console';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/available-doctors', pathMatch: 'full' },  // Default route
  { path: 'available-doctors', component: AvailableDoctorsComponent },
  { path: 'medical-history', component: ViewMedicalHistoryComponent },
  { path: 'view-payment-history', component: ViewPaymentHistoryComponent },
  { path: 'profile', component: ProfileComponent },  // My Profile page route
];
