import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/libs/store/util-formatters';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Board Game Hoard';
  games: Observable<any>;
  formatRating = formatRating;

  constructor(client: HttpClient) {
    this.games = client.get('/api/games');
  }
}
