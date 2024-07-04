import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges,OnInit{
 
  isShowClass:boolean = false;

  headerClass:string = 'initial-header-class';

  constructor(private commonService:CommonService){}

ngOnInit(): void {
  this.commonService.headerChangeSubject.subscribe({
    next:(data)=>{
      console.log(data,'subs');
      this.headerClass = data;
      

    }
  })
}
  
  ngOnChanges(): void {
    console.log("header comonet");
    
  }
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
