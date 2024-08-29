import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ListingType ={
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'para-routing';

  contacts: ListingType[] = [
    {
      id:1, name:"max",email:"max@gmail.com"
    },
    {
      id:1, name:"max",email:"max@gmail.com"
    },
    {
      id:1, name:"max",email:"max@gmail.com"
    },
    {
      id:1, name:"max",email:"max@gmail.com"
    }
  ]
}
