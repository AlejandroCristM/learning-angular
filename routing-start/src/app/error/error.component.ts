import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMesagge : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMesagge= this.route.snapshot.data['message'];
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMesagge = data['message'];
      }
    );
  }

}
