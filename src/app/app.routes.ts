import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ListingIndividualComponent } from './Components/individual-lisiting/individual-lisiting.component';

export const routes: Routes = [{
    path:"home",
    title:"Home page",
    component:HomeComponent,
    children:[
        {
            path:":id",
            title:"service page",
            component:ListingIndividualComponent
        }
    ]
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
},
{
    path:"listing/:id",
    title:"listing deatisl",
    component:ListingIndividualComponent
}
];
