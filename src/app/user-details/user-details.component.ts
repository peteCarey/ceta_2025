import { Component, Input, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';
import { IUser } from 'src/user';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article *ngIf="userDetails">
      <section class="listing-description">
        <h2 class="listing-heading">{{ userDetails.name }}</h2>
        <p class="listing-location">{{ userDetails.address.city }}, {{ userDetails.address.street }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">User Details</h2>
        <ul>
            <li>Name: {{ userDetails.name }}</li>
            <li>Preferred Name: {{ userDetails.username }}</li>
            <li>email: {{ userDetails.email }}</li>
            address:
            <li>street: {{ userDetails.address.street }}</li>
            <li>suite: {{ userDetails.address.suite }}</li>
            <li>city: {{ userDetails.address.city }}</li>
            <li>zipcode: {{ userDetails.address.zipcode }}</li>
            geo:
            <li>lat: {{ userDetails.address.geo.lat }}</li>
            <li>lng: {{ userDetails.address.geo.lng }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Update User</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Update</button>
        </form>
      </section>
    </article>
  `,
 styleUrls: ['./user-details.component.css'],
})
// export class UserDetailsComponent implements OnInit{
export class UserDetailsComponent{
    route: ActivatedRoute = inject(ActivatedRoute);
    userService = inject(UserService);
   
    @Input() userDetails: IUser | undefined;
    userDetailsId = -1;

     applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });

    constructor() {
        this.userDetailsId = parseInt(this.route.snapshot.params['id'], 10);;
        this.userService.getUserDetailsById(this.userDetailsId).then((userDetails) => {
        this.userDetails = userDetails!;
        });
    }
  
    submitApplication() {
        this.userService.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? '',
        );
    }
}   

