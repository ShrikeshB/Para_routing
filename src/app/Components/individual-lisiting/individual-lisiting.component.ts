import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import listings from '../../asset/ls.json';

type listingType = {
  id: number;
  name: string;
  email:string;
}

@Component({
  selector: 'app-listing-individual',
  standalone: true,
  imports: [],
  templateUrl: './individual-lisiting.component.html',
  styleUrl: './individual-lisiting.component.scss'
})
export class ListingIndividualComponent {
  contacts: listingType[] = listings;

  listingId: number | null = null;
  currentName: string | null = '';
  currentEmail: string | null = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.listingId = idParam ? parseInt(idParam) : null;

      if(this.listingId !== null){
        const listing = this.contacts.find(
        (contact) => contact.id === this.listingId
        );

        if(listing){
          this.currentName=listing.name;
          this.currentEmail=listing.email;
        }else{
          console.error("Listing not found", this.listingId);
        }
      }else{
        console.error("Invalid or missing listing Id")
      }
    })
  }
}
