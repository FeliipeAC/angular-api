import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  exibirHeaderFooter = false;

  constructor (private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.authService.showHeaderFooter.subscribe(show => this.exibirHeaderFooter = show);
  }
}
