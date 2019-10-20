import { Injectable } from '@angular/core';
import movies from '../movies.json';

@Injectable()
export class movieService {
	getAllMovies() {
		return movies
	}
}