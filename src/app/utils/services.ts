import { Injectable } from '@angular/core';
import movies from '../movies.json';

@Injectable()
export class movieService {
	getAllMovies() {
		return movies
	}

	getOneMovie(id) {
		// console.log(id)
		// console.log(movies.filter(movie => movie.id === id))
		return movies.filter(movie => movie.id === parseInt(id))
	}
}