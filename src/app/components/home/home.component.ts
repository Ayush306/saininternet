import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlansComponent } from './components/plans/plans.component';
import { ConnectOnWhatsappComponent } from './components/connect-on-whatsapp/connect-on-whatsapp.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { ConnectService } from '../../services/connect.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PlansComponent,
    ConnectOnWhatsappComponent,
    PricingComponent,
    ServicesComponent
  ],
  providers:[ConnectService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy,OnInit{
constructor(private connectService:ConnectService,private commonService:CommonService){

}
 ngOnInit(){
  this.commonService.setHeaderClass('changed-header-class');

 }
callUs(){
  this.connectService.connect();
}

ngOnDestroy(): void {
    this.commonService.setHeaderClass('initial-header-class');
}
}
