import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '@bg-hoard/util-interface';
import { formatRating } from '@bg-hoard/store/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private client: HttpClient) {
  }

  title = 'Board Game Hoard';
  formatRating = formatRating;
  games = this.client.get<Game[]>('/api/games');
}
