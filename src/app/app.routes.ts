import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('./components/home/home.component').then(m=>m.HomeComponent)
    },
    {
        path:'plans',
        loadComponent:()=> import('./components/home/components/plans/plans.component').then(m=>m.PlansComponent)
    },
    {
        path:'speedTest',
        loadComponent:()=>import('./components/speed-test/speed-test.component').then(m=>m.SpeedTestComponent)
    },
    {
        path:'blog',
        loadComponent:()=>import('./components/blog/blog.component').then(m=>m.BlogComponent)
    },
    {
        path:'contactUs',
        loadComponent:()=>import('./components/contact-us/contact-us.component').then(m=>m.ContactUsComponent)
    },
    {
        path:'refer-a-friend',
        loadComponent:()=>import('./components/refer-a-friend/refer-a-friend.component').then(m=>m.ReferAFriendComponent)
    },
    {
        path:'blog',
        loadComponent:()=>import('./components/blog/blog.component').then(m=>m.BlogComponent)
    }
];
