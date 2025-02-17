import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../user.service';
import { IUser } from 'src/user';

@Component({
  selector: 'app-user',
  imports: [CommonModule, UserDetailsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>

     <section class="results">
      <app-user-details
        *ngFor="let userDetails of userDetailsList"
        [userDetails]="userDetails"
      ></app-user-details>
    </section>
  `,
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userDetailsList:IUser[] =[];
  filteredDetailsList: IUser[] = [];
  userService:UserService = inject(UserService);

  constructor() {
    this.userDetailsList = this.userService.getAllUsers();
    this.filteredDetailsList = this.userDetailsList;
    console.log(this.userDetailsList)
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredDetailsList = this.userDetailsList;
    } else {
      this.filteredDetailsList = this.userDetailsList.filter((user) =>
        user.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }

  
 
}