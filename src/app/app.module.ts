import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { MoviesComponent } from './layouts/movies.component';
import { MoviesListComponent } from './components/movie-single.component';
import { MovieDetailsComponent } from './components/movie-details.component';
import { appRoutes } from './routes';
import { movieService } from './utils/services';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieDetailsComponent
  ],
  providers: [movieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
