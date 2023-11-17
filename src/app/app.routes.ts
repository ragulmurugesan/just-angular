import { Routes } from '@angular/router';
import { UsersComponent } from './Components/Users/users.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    { path: 'user', title: 'Users List', component: UsersComponent },
    { path: 'home', title: 'Wizard of Oz', component: HomeComponent }
];
