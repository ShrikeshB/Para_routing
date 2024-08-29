import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [{
    path:"",
    title:"Home page",
    component:HomeComponent
},
{
    path:"contact",
    title:"service page",
    component:ContactComponent
}
,
{
    path:"service",
    title:"service page",
    component:ServicesComponent
}
];
