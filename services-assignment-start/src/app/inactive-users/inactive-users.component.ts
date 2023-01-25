import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserStatusService } from '../user-status.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userStatusService: UserStatusService ) { }

  ngOnInit() {
    this.users = this.userStatusService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userStatusService.onSetToActive(id);
  }
}
