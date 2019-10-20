import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import movies from '../movies.json';

@Component({
  // selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  // template: ``,
  styles: [`
  	.title {
			font-weight: bold;
		}

		.container {
  		margin-top: 450px;
		}
  `]
})

export class MovieDetailsComponent {
  constructor (private route: ActivatedRoute) {
  	// console.log(route)
  	console.log(this.route.snapshot.params.id)
  }
  ngOnInit() {

  }
}
