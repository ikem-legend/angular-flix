import { Component } from '@angular/core';

@Component({
  selector: 'nav-link',
  templateUrl: './navbar.component.html',
  // template: ``,
  styles: [`
  	.navbar {
			z-index: 10 !important;
		}
  	.nav-link, .navbar-brand {
			color: #ffffffe6 !important;
		}
  `]
})

export class NavbarComponent {
  // @Input() movies : string;
}
