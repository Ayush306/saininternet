import { Component } from '@angular/core';
import { PlansComponent } from './components/plans/plans.component';
import { ConnectOnWhatsappComponent } from './components/connect-on-whatsapp/connect-on-whatsapp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PlansComponent,
    ConnectOnWhatsappComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
