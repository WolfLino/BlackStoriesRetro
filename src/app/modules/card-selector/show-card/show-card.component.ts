import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardGameComponent } from 'src/app/shared/components/card-game/card-game.component';
import { CardGameDecks } from 'src/app/shared/mocks/card-game-decks';
import { CardGame } from 'src/app/shared/models/card-game.model';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
  @ViewChild('currentCard') currentCard: CardGameComponent;

  card?: CardGame;
  reveal: boolean = false;
  zoom = false;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const idCard = this.route.snapshot.paramMap.get('id');

    this.card = CardGameDecks.deck1.find((c) => c.id.toString() === idCard);
    console.log(this.card);
  }

  setZoom(): void {
    // if (this.zoom) {
    //   this.currentCard.isStretched = false;
    //   this.zoom = false;
    // } else {
    //   this.zoom = this.currentCard.isStretched;
    // }
  }
}
