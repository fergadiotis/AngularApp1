import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationModule } from "./reservation/reservation.module";

@Component({
  selector: 'app',
  standalone: true,
  imports: [ReservationModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Conservation Areas';
}