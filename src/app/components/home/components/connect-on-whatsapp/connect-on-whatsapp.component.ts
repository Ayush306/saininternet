import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-connect-on-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './connect-on-whatsapp.component.html',
  styleUrl: './connect-on-whatsapp.component.scss'
})
export class ConnectOnWhatsappComponent {
  constructor(){}
  connect(){
    const phone = '+918700838844';
    const text = 'I want to know more about your services!'
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink,'_blank');
  }
}
