import { Routes } from '@angular/router';
import { MoviesComponent } from './layouts/movies.component';
import { MovieDetailsComponent } from './components/movie-details.component';

export const appRoutes: Routes = [
	{ path: "movies", 	component: MoviesComponent},
	{ path: "movies/:id", 	component: MovieDetailsComponent},
	{ path: "",		redirectTo: "/movies", 		pathMatch: "full"}
]