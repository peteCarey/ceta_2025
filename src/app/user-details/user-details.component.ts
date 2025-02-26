import { Component, Input, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { UserService } from '../user.service';
import { IUser } from 'src/user';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule],
  template: `
    <article *ngIf="userDetails">
      <section class="listing-description"><span><fa-icon [icon]="faTrash"></fa-icon></span><span><fa-icon [routerLink]="['/user-details/edit/', userDetails.id]" [icon]="faPencil"></fa-icon></span>
      <a class="button" [routerLink]="['/user-details', userDetails.id]">Details</a>
        <h2 class="listing-heading"> <a [routerLink]="['/user-details', userDetails.id]"> {{ userDetails.name }}</a></h2>
        <p class="listing-location">{{ userDetails.address.city }}, {{ userDetails.address.street }}</p> 
      </section>
      <section class="listing-features">
        <h2 class="section-heading">User Details</h2>
        <ul>
            <li>Name:  {{ userDetails.name }}</li>
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

    </article>
  `,
 styleUrls: ['./user-details.component.css'],
})
// export class UserDetailsComponent implements OnInit{
export class UserDetailsComponent{
    route: ActivatedRoute = inject(ActivatedRoute);
    userService = inject(UserService);
    faPencil = faPencil;
    faTrash = faTrash;

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

