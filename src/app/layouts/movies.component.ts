import { Component, OnInit } from '@angular/core';
import { movieService } from "../utils/services";

@Component({
  // selector: 'movies-app',
  template: `
  	<nav-link class="home navbar-dark"></nav-link>
		<div style="text-align: center">
		  <img src="assets/images/nfx-avng.jpg" alt="home page" class="bg-img">
		</div>
  	<div class="container">
	  	<div class="jumbotron">
	  		<div class="text-center">
		  		<h3>Favourite movie is {{allMovies[0].title}}</h3><br>
		  		<img src={{allMovies[0].image}} />
		  	</div>
	  	</div>
	  	<div class="row">
	  		<movies-list [movies]="allMovies" class="col-md-12"></movies-list>
	  	</div>
	  </div>
  `,
  styles: [`
		.container {
  		margin-top: 450px
		}

		img.bg-img {
			position: absolute;
	    top: 0;
	    left: 0;
	    height: 500px;
	    width: 100%;
	    width: -webkit-fill-available;
		}
	`]
})

export class MoviesComponent implements OnInit {
	allMovies:any []
	constructor(private movies: movieService) {
		
	}

	ngOnInit() {
		this.allMovies = this.movies.getAllMovies()
	}
}
