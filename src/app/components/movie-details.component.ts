import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from "../utils/services";

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

		img.class-card-top {
			// position: absolute;
	    // top: 0;
	    // left: 0;
	    height: 500px;
	    width: 100%;
	    width: -webkit-fill-available;
		}
		.navbar {
			z-index: 10 !important;
		}
  	.nav-link, .navbar-brand {
			color: inherit !important;
		}
  `]
})

export class MovieDetailsComponent {
	movie:any

  constructor (private route: ActivatedRoute, private movies: movieService) {
  	// console.log(this.route.snapshot.params.id)
  }
  ngOnInit() {
		this.movie = this.movies.getOneMovie(this.route.snapshot.params.id)[0]
		// console.log(this.movie)
  }
}
