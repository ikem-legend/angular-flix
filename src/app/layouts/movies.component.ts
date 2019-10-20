import { Component } from '@angular/core';
import movies from '../movies.json';

@Component({
  // selector: 'movies-app',
  template: `
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
	`]
})

export class MoviesComponent {
	allMovies:any = movies
}
