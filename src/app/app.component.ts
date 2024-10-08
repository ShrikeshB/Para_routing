import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

type ListingType ={
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
