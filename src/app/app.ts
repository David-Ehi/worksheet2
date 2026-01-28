import { tmplAstVisitAll } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Week2 - Fav Movies');

    protected readonly movies = signal<string[]>([
    'The Dark Knight',
    'Inception',
    'Avengers: Endgame',
    'Interstellar',
    'Titanic'
  ]);

  protected favourites = signal<string[]>([
  ])

  protected addFavourite(fav:string) {
    this.favourites.update(current => [...current, fav]);
  }
 
  protected removeFavourites(index:number){
    this.favourites.update(favourites =>
      favourites.filter((_, i) => i !== index)
    )
  }

}

