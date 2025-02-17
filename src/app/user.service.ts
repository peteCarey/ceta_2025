import { Injectable } from '@angular/core';
import {IUser} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    protected userDetailsList: IUser[] = [
        {
            id: 0,
            name: 'Acme Fresh Start Housing',
            city: 'Chicago',
            zipcode: 'IL',
            photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
            website: "www.youtube.com",
            company: "bloggs",
            phone: "0151 652 2868",
            username: '',
            email: '',
            address: undefined,
            street: '',
            suite: '',
            geo: undefined,
            lat: '',
            lng: '',
            _name: '',
            catchPhrase: '',
            bs: ''
        },
    ]


    getAllUsers(): IUser[] {
        return this.userDetailsList;
    }

    getUserDetailsById(id: number): IUser | undefined {
        return this.userDetailsList.find((user) => user.id === id);
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        // tslint:disable-next-line
        console.log(
      `User application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
    }
}