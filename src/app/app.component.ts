import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './Components/Users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'just-angular';
  userClicked='';
  usersList=[
    { id: 1, title: 'Maeve' },
    { id: 2, title: 'Iron' },
    { id: 3, title: 'Michael' },
    { id: 4, title: 'Chris' },
  ];

  handleClick(str:string) {
    this.userClicked = str;
  }

}
