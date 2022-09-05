import { CardGame } from '../models/card-game.model';

export class CardGameDecks {
  static deck1: Array<CardGame> = [
    {
      id: 1,
      title: 'Crimes em Los Angeles',
      description:
        'Em meado dos anos 90, boa parte dos crimes de <b>Los Angeles</b> não ocorreu na cidade.',
      imagePath: 'assets/cards/Card1-front.png',
      altImageText: 'Imagem do mapa mundi',
      backImagePath: 'assets/cards/Card1-back.png',
      backText1:
        'A polícia de Los Angeles registrava <b>casos que não tinham sua localização definida</b> no próprio endereço da delegacia.',
      backText2:
        "Ao gerar relatórios, o bairro da delegacia tinha uma <b>quantidade desproporcional de delitos</b>. Com isso, acharam melhor registrar tais casos nas <b>coordenadas 0, 0, 0</b> que fica no Oceano Atlântico ao oeste do continente africano.",
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
      backText1: 'Após alguns dias do funcionário <b>Steven Null</b> registrar-se no sistema e ver que seu usuário havia sumido no dia seguinte,',
      backText2: 'foi descoberto que devido ao seu sobrenome ser <b>Null</b> (<i>o que comumente indica nulo para computadores</i>), ao sistema fazer as limpezas de registros, o seu usuário era marcado como lixo eletrônico.'
    },
    {
      id: 3,
      title: 'Verão de 90 graus',
      description:
        '<b>Em um verão em uma cidade</b> a temperatura em certos locais chegam a atingir 90 graus.',
      imagePath: 'assets/cards/Card3-front.png',
      altImageText:
        'Desenho da Elizabeth\' Tower.',
      backImagePath: 'assets/cards/Card3-back.jfif',
      backText2: 'Um efifício foi contruído na cidade de Londres em 2013, porém por causa de sua forma curva (meio côncavo), material altamente reflexivo nas janelas e sua altura fez com que os raios solares fossem concentrados em alguns blocos da cidade, o que resultou em alguns carros derretidos.'
    },
  ];
}
