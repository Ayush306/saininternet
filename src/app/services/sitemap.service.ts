import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SitemapService {

  constructor(private http: HttpClient) {}

  public generateSitemap() {
    const staticRoutes:string[] = [
      '/',
      '/plans',
      '/speedTest',
      'contactUs',
      'refer-a-friend',
      'blog',
    ];

    let dynamicRoutes: string[] = [];

    this.http.get(`${environment.apiBaseUrl}/products`).subscribe((products: any) => {
      dynamicRoutes = products.map((product: any) => `/products/${product.id}`);
      this.createSitemap([...staticRoutes, ...dynamicRoutes]);
    });
  }

  private createSitemap(routes: string[]) {
    const hostname = 'https://www.saininternet.in';
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    routes.forEach(route => {
      sitemap += `  <url>\n    <loc>${hostname}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });

    sitemap += `</urlset>`;
    const blob = new Blob([sitemap], { type: 'text/xml' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'sitemap.xml';
    link.click();
  }
}
