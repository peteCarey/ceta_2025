import { Injectable } from '@angular/core';
import {IUser} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    url = 'http://localhost:3000/users';

    async getAllUsers(): Promise<IUser[]> {
        const data = await fetch(this.url);
        return (await data.json()) ?? [];
    }

    async getUserDetailsById(id: number): Promise <IUser | undefined> {
        const data = await fetch(`${this.url}/${id}`);
        return (await data.json()) ?? {};
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        // tslint:disable-next-line
        console.log(
      `User application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
    }
}