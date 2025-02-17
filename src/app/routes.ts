import {Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user-details/user-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: UserComponent,
    title: 'Home page',
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    title: 'User details',
  },
];
export default routeConfig;