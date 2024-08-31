import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// import json file of list
import ls from "../../asset/ls.json"

type ListingType ={
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'para-routing';

  contacts: ListingType[] = ls
 
}
