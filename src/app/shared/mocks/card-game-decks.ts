import { CardGame } from '../models/card-game.model';

export class CardGameDecks {
  static deck1: Array<CardGame> = [
    {
      id: 1,
      title: 'Crimes em Los Angeles',
      description:
        'Em meado dos anos 90, os <b>policiais de Los Angeles</b> começam a registrar um <b>aumento na criminalidade ao oeste do continente africano<b>.',
      imagePath: 'assets/cards/Card1-front.png',
      altImageText: 'Imagem do mapa mundi',
      backImagePath: 'assets/cards/Card1-back.png',
      backText1:
        'A polícia de Los Angeles registrava <b>casos que não tinham sua localização definida</b> no próprio endereço da delegacia.',
      backText2:
        "Porém quando geravam relatórios, o bairro da delegacia tinha uma <b>quantidade desproporcional de delitos</b>. Por esse motivo, acharam melhor registrar tais casos nas <b>coordenadas 0, 0, 0</b>.",
    },
    {
      id: 2,
      title: 'Apagado do sistema',
      description:
        '<b>Um recém funcionário</b> se cadastra no sistema da empresa no primeiro dia, no dia seguinte ele já não está mais nos registros.',
      imagePath: 'assets/cards/Card2-front.png',
      altImageText:
        'Imagem de uma mulher encostada em um balcão de um bar, com uma pessoa a observando do outro lado do balcão.',
      backImagePath: 'assets/cards/Card2-back.png',
      backText1: 'Após alguns dias do funcionário <b>John Null</b> registrar-se no sistema e ver que seu usuário havia sumido no dia seguinte,',
      backText2: 'foi descoberto que devido ao seu sobrenome ser <b>Null</b> (<i>o que comumente indica nulo para computadores</i>) e ao sistema fazer limpezas de registros, seu usuário era apagado por engano a cada limpeza.'
    },
    {
      id: 3,
      title: 'Londres 90 graus',
      description:
        '<b>Em um verão na cidade de Londres</b> a temperatura em certos locais chegam a atingir 90 graus.',
      imagePath: 'assets/cards/Card3-front.png',
      altImageText:
        'Desenho da Elizabeth\' Tower.',
      backImagePath: 'assets/cards/Card3-back.jfif',
      backText2: 'Devido a uma infeliz decisão na construção de um edifício na cidade de Londres, foram colocados diversas janelas reflexivas em um edifícil de curvo (quase concavo). Como resultado, a luz solar era refletida em um ponto específico, que chegava a atingir 90 graus e até danificar alguns carros.'
    },
  ];
}
