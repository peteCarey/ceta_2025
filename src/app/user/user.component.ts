import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { IUser } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserDetailsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>

    <section class="results">
        <app-user-details
            *ngFor="let userDetails of filteredDetailsList"
            [userDetails] ="userDetails"
        ></app-user-details>
    </section>
  `,
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userDetailsList:IUser[] = [];
  userService:UserService = inject(UserService);
  filteredDetailsList: IUser[] = [];
  
  constructor() {
    this.userService.getAllUsers().then((userDetailsList: IUser[]) => {
        this.userDetailsList = userDetailsList;
        this.filteredDetailsList = userDetailsList;
        console.log("User details list is", this.filteredDetailsList[0].name);
    })
  }
  filterResults(text: string) {
    if (!text) {
        this.filteredDetailsList = this.userDetailsList;
        return;
    } 
    
        this.filteredDetailsList = this.userDetailsList.filter((userDetails) =>
        userDetails?.address.city.toLowerCase().includes(text.toLowerCase())
      );
    
  }
}
