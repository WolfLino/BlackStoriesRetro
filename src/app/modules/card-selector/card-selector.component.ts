import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardGameDecks } from 'src/app/shared/mocks/card-game-decks';
import { CardGame } from 'src/app/shared/models/card-game.model';

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss'],
})
export class CardSelectorComponent implements OnInit {
  cards: Array<CardGame> = [];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.cards = CardGameDecks.deck1;
  }

  navigate(card: CardGame): void {
    console.log(`Clicou no card ${card.id}`);
    this.router.navigate([`card/${card.id}`]);
  }
}
