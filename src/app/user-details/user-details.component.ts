import { Component, Input, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { IUser } from 'src/user';
import { UserService } from '../user.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <article *ngIf="userDetails">
      <img
        class="listing-photo"
        [src]="userDetails.company.bs"
        alt="Exterior photo of {{ userDetails.name }}"
        crossorigin
      />
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
          

        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Update</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Update</button>
        </form>
        <a [routerLink]="['/user-details', userDetails.id]">Learn More</a>
      </section>
    </article>
  `,
 styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
    @Input() userDetails!: IUser;
    userService = inject(UserService);
    user: IUser | undefined;

    route: ActivatedRoute = inject(ActivatedRoute);
         userDetailsId = -1;

    constructor() {
        this.userDetailsId = Number(this.route.snapshot.params['id']);
        // this.user = this.userService. getUserDetailsById(this.userDetailsId);
        // console.log("user is " + this.user)
    }

    ngOnInit() {
    this.userDetails = this.userService.getUserDetailsById(this.userDetailsId) ?? {
      id: -1,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    };
  }

    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
  });


    submitApplication() {
        this.userService.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? '',
        );
    }
}   

