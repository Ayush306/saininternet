import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConnectOnWhatsappComponent } from './components/home/components/connect-on-whatsapp/connect-on-whatsapp.component';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ConnectOnWhatsappComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document,private meta: Meta){}
  title = 'saininternet';


  schema = {
    '@context': 'http://schema.org',
    '@type': 'Internt service provider',
    'name': 'SainInternet',
    'url': 'https://www.saininternet.in',
    'logo': 'https://www.saininternet.in/logo.png',
    'description': 'SainInternet provides reliable internet services for businesses and homes.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Block L-2 Sangam Vihar New Delhi -110080',
      'addressLocality': 'Sangam Vihar',
      'addressRegion': 'New Delhi',
      'postalCode': '110080',
      'addressCountry': 'India'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91 8700838844',
      'contactType': 'Customer Service',
      'areaServed': ['IN', 'IN'], // List of countries served
      'availableLanguage': 'English'
    },
    'sameAs': [
      'https://www.instagram.com/saini_broadband?igsh=em5pMjlodmRuaHdn',
      'https://m.facebook.com/people/Saini-Internet/61561317509441',
      'https://www.linkedin.com/in/saini-internet-61b190315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    ]
  };
   canonicalUrl = 'https://www.saininternet.in';
  ngOnInit(): void {
    this.addSchemaToHead();
    this.addCanonicalTag();
  }
  private addSchemaToHead(): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(this.schema);
    this.document.head.appendChild(script);
  }
  addCanonicalTag(): void {
    this.meta.addTag({ rel: 'canonical', href: this.canonicalUrl });
  }



}
