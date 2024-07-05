import { Component } from '@angular/core';
import { ConnectService } from '../../../../services/connect.service';
import {  RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-10-benifits-of-wifi',
  standalone: true,
  imports: [RouterModule],
  providers:[ConnectService],
  templateUrl: './top-10-benifits-of-wifi.component.html',
  styleUrl: './top-10-benifits-of-wifi.component.scss'
})
export class Top10BenifitsOfWifiComponent {
    constructor(private connectServive:ConnectService){

    }
    getNow(){
      this.connectServive.connect();
    }
   
}
