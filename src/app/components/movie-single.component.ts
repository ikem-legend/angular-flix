import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-list',
  templateUrl: './movie-single.component.html',
  // template: ``,
  styles: [`
  	.title {
			font-weight: bold;
		}
  `]
})

export class MoviesListComponent {
  @Input() movies : string;
}
