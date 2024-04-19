import { Component } from '@angular/core';
import { PlansComponent } from './components/plans/plans.component';
import { ConnectOnWhatsappComponent } from './components/connect-on-whatsapp/connect-on-whatsapp.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PlansComponent,
    ConnectOnWhatsappComponent,
    PricingComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
