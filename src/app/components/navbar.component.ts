import { Component } from '@angular/core';

@Component({
  selector: 'nav-link',
  templateUrl: './navbar.component.html',
  styles: [`
  	:host.home .navbar {
			z-index: 10 !important;
		}
    :host.home .nav-link, :host.home .navbar-brand {
      color: #ffffffe6 !important;
    }
  	:host.single .nav-link, :host.navbar-brand {
			color: #000 !important;
		}
  `]
})

export class NavbarComponent {
  
}
