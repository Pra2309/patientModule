import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
  standalone: true,  // Make the root component standalone
  imports: [RouterModule, NavbarComponent, SidebarComponent,ProfileComponent]  // Import standalone components here
})
export class AppComponent { }
