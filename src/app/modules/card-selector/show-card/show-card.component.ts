import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardGameDecks } from 'src/app/shared/mocks/card-game-decks';
import { CardGame } from 'src/app/shared/models/card-game.model';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
  card?: CardGame;
  reveal: boolean = false;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const idCard = this.route.snapshot.paramMap.get('id');

    this.card = CardGameDecks.deck1.find((c) => c.id.toString() === idCard);
    console.log(this.card);
  }
}
