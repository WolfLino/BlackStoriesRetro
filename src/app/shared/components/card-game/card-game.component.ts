import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss'],
})
export class CardGameComponent implements OnInit {
  @Input() backgroudImage?: string;
  @Input() width: string = '300px';
  @Input() height: string = '450px';
  @Input() padding: string = '0.85rem';
  @Input() title?: string;
  @Input() altText: string = '';

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
}
