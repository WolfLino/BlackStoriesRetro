import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss'],
})
export class CardGameComponent implements OnInit {
  @Input() frontImage?: string;
  @Input() width: string = '300px';
  @Input() height: string = '450px';
  @Input() padding: string = '0.85rem';
  @Input() title?: string;
  @Input() altText?: string;
  @Input() description: string = '';
  @Input() hideDescription: boolean = false;
  @Input() canRotate: boolean = true;
  @Input() canZoom: boolean = false;
  @Input() revealBack = true;
  @Input() backText1?: string;
  @Input() backText2?: string;
  @Input() backImage?: string;
  @Input() backAltText?: string;
  @Input() canStretch = true;
  @Input() isStretched: boolean = false;

  rotated: boolean = false;
  style = {
    width: `calc(100% - ${this.padding} - ${this.padding})`,
    height: `calc(100% - ${this.padding} - ${this.padding})`,
  };

  constructor() {}

  ngOnInit(): void {
    this.style = {
      width: `calc(100% - ${this.padding} - ${this.padding})`,
      height: `calc(100% - ${this.padding} - ${this.padding})`,
    };
  }

  applyZoom() {}
}
