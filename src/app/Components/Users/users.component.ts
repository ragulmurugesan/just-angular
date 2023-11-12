import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-users',
    template: `Users
    @for( item of users; track item.id ) {
        <p (click)="onClickhandle($event)">{{item.title}}</p>
    }
    `,
    standalone: true
})
export class UsersComponent {
    @Input() users: any;
    @Output() onClickEmit = new EventEmitter<string>();

    onClickhandle($event: any) {
        this.onClickEmit.emit($event.target.innerHTML);
    }
}