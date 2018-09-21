import { Component } from '@angular/core';
import { Router, ActivatedRoute,  NavigationEnd } from '@angular/router';

@Component({
  selector: 'comback-rt',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl;

  constructor(private router: Router) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }
}
