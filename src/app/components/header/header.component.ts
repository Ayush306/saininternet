import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isShowClass:boolean = false;
  connect(){
    const phone = '+918700838844';
    const text = 'I want to know more about your services!'
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink,'_blank');
  }

  collapseNavbar() {
    const navbar = document.getElementById('navbarNav');
    console.log(navbar);
    
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  isShow(){
    this.isShowClass  = !this.isShowClass; 
  }
}
