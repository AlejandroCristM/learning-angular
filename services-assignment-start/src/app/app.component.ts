import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { UserStatusService } from './user-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserStatusService]
})
export class AppComponent {

  constructor(private counterService: CounterService ){}
}