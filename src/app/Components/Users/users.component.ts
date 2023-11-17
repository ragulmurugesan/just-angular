import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-users',
    template: `
    <h2 class="users-greet">Users</h2>
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
    {{ipsumContent}}
        Users
    @for( item of users; track item.id ) {
        <p (click)="onClickhandle($event)">{{item.title}}</p>
        }
    
    @defer(on viewport){
        <p>Defer</p>
    } @placeholder(minimum 2s) {
        <span>Deferred stuff comes here </span>
    }
    `,
    standalone: true,
    styleUrl: './users.component.scss'
})
export class UsersComponent {
    @Input() users: any;
    @Output() onClickEmit = new EventEmitter<string>();
    ipsumContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    onClickhandle($event: any) {
        this.onClickEmit.emit($event.target.innerHTML);
    }
}