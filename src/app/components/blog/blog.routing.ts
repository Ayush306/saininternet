import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
      
        loadComponent:()=>import('./blog.component').then(th=>th.BlogComponent)        
    },
    {
        path:'are-fiber-optics-eco-friendly',
        loadComponent:()=>import('./components/blogs/are-fiber-optics-eco-friendly/are-fiber-optics-eco-friendly.component').then(th=>th.AreFiberOpticsEcoFriendlyComponent)
    }
];
