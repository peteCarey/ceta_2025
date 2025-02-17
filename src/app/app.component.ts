import {Component} from '@angular/core';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [UserComponent, RouterModule],
  template: `
    <h1>CETA</h1>
    <main>
        <a [routerLink]="['/']">
            <header class="brand-name">
                <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
            </header>
        </a>
        <section class="content">
            <router-outlet></router-outlet>
        </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = 'ceta';
}
