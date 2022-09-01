import { CardGame } from '../models/card-game.model';

export class CardGameDecks {
  static deck1: Array<CardGame> = [
    {
      id: 1,
      title: 'Crimes em Nova Iorque',
      description:
        '<b>Os policiais locais de Nova Iorque</b> notam um aumento nos crimes ao oeste do continente africano.',
      imagePath: 'assets/cards/mapa-face-1.png',
      altImageText: 'Imagem do mapa mundi',
      backImagePath: 'assets/cards/mapa-face-1.png',
      backText1:
        '<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry.',
      backText2:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: 'Apagado do sistema',
      description:
        '<b>Um recém funcionário</b> se cadastra no sistema da empresa no primeiro dia, no dia seguinte ele já não está mais no registro.',
      imagePath: 'assets/cards/blackstories1.svg',
      altImageText:
        'Imagem de uma mulher encostada em um balcão de um bar, com uma pessoa a observando do outro lado do balcão.',
      backImagePath: 'assets/cards/blackstories1.svg',
    },
    {
      id: 3,
      title: 'Apagado do sistema',
      description:
        '<b>Um recém funcionário</b> se cadastra no sistema da empresa no primeiro dia, no dia seguinte ele já não está mais no registro.',
      imagePath: 'assets/cards/blackstories1.svg',
      altImageText:
        'Imagem de uma mulher encostada em um balcão de um bar, com uma pessoa a observando do outro lado do balcão.',
      backImagePath: 'assets/cards/blackstories1.svg',
    },
  ];
}
