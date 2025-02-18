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
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
             address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Chicargo",
                zipcode: "IL",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "0151 652 2868",
            website: "ambrose.net",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "https://angular.dev/assets/images/tutorials/common/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg"
            },   
        },    
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs:  `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
            },
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            address: {
                street: "Victor Plains",
                suite: "Suite 879",
                city: "Wisokyburgh",
                zipcode: "90566-7771",
                geo: {
                    lat: "-43.9509",
                    lng: "-34.4618"
                }
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
                name: "Deckow-Crist",
                catchPhrase: "Proactive didactic contingency",
                bs: "https://angular.dev/assets/images/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg"
            },
        },
];


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