import Challenge from '../models/Challenge';
import Course from '../models/Course';
import Registration from '../models/Registration';
import User from '../models/User';

export const mock: {
  users: User[];
  course: Course[];
  registration: Registration[];
  challenge: Challenge[];
} = {
  users: [
    {
      id: '1',
      name: 'Roberto Guerra',
      avatar: 'https://i.ibb.co/Zg5ZFXq/profile.jpg',
    },
  ],
  course: [
    {
      title: 'O que é o co2',
      image: 'https://i.ibb.co/sm59Vpw/book.png',
      content:
        'O dióxido de carbono (CO2), também conhecido como gás carbônico, é um composto químico gasoso que provoca graves desequilíbrios no efeito estufa do planeta Terra. Em condições normais, esse gás não apresenta cheiro ou sabor, sendo de difícil detecção. \n\n Essencial para a vida no planeta, o carbono é encontrado na atmosfera na forma de dióxido de carbono. Por outro lado, vários organismos liberam esse gás mediante ao processo de respiração, inclusive plantas e árvores (conhecidas como compensadoras de dióxido de carbono) que, em condições de calor e seca, fecham seus poros para impedir a perda de água e mudam para o processo de respiração noturno, denominado de fotorrespiração, ou seja, consomem oxigênio e produzem dióxido de carbono.',
      id: '1',
    },
    {
      title: 'Importancia da Amazonia',
      image: 'https://i.ibb.co/3Fv7CJX/arvore.png',
      content:
        'O bioma amazônico é um ecossistema único. É abrigo da maior biodiversidade do planeta em plantas, animais e microrganismos. Estima-se a existência nesse bioma de cerca de 30 milhões de espécies animais. Compreende 40% de toda a América do Sul, e 60% desse território fica localizado no Brasil, onde vivem quase 30 milhões de brasileiros. \n\n Com mais da metade do bioma em seu território, o Brasil é reconhecido como o país da Amazônia, a maior floresta tropical do planeta. Mas parte dessa floresta (40%) está localizada em outros nove países sul-americanos, com destaque para Peru, Equador e Venezuela. Mas é para o Brasil que se aponta o dedo quando o assunto é Amazônia. \n\n O valor inestimável da biodiversidade dessa floresta torna a Amazônia um bem de interesse global. Descuidar dela traz não apenas prejuízos econômicos ao Brasil, mas desgaste internacional para a imagem do país. \n\n A floresta desempenha um papel fundamental no ciclo da água e do carbono. No ciclo do carbono ocorre a absorção do CO2 atmosférico liberado pela combustão de combustíveis fósseis e pela queima de resíduos vegetais e outros produtos orgânicos. Com o CO2, que é um dos gases de efeito estufa, capturado da atmosfera pelas plantas da grande floresta, a quantidade desse gás presente no ar atmosférico é reduzida drasticamente. \n\n Pensando na riqueza escondida na Amazônia em biodiversidade, uma alternativa considerada estratégica para o Brasil usufruir das riquezas da região, seria agregar valor a esses recursos em novos produtos farmacêuticos, cosméticos e alimentícios, entre outros, mas a legislação brasileira não facilita. As plantas amazônicas contêm segredos em novas moléculas, enzimas, antibióticos e fungicidas naturais que podem ser sintetizados em laboratório, resultando em produtos de alto valor agregado.',
      id: '2',
    },
    {
      title: 'O Aquecimento global',
      image: 'https://i.ibb.co/RTJ1sbv/globe.png',
      content: `A educação ambiental é um processo educativo em que se constroem valores importantes relacionados com a conservação do meio ambiente. Durante esse processo, devemos deixar claro a necessidade de cuidarmos da natureza e a importância de preservarmos os recursos naturais para que possam ser usados por nós e também estarem disponíveis às futuras gerações. Nesse contexto, nasce a necessidade de ensinar os 5 Rs — cinco termos que nos ajudam a compreender como devemos comportar-nos em relação ao meio ambiente. Leia também: 10 atitudes que podem salvar o planeta O QUE SÃO OS 5 RS? Os 5 Rs são uma política que visa reduzir a geração de resíduos no nosso planeta, fazendo com que cada um de nós mude o comportamento diante do consumo e a forma que lida com os resíduos gerados. Os 5 Rs consistem em cinco palavras: repensar, recusar, reduzir, reutilizar e reciclar. Os 5 Rs mostram-nos como devemos agir para melhorar o meio ambiente. Os 5 Rs mostram-nos como devemos agir para melhorar o meio ambiente. Repensar: Cada pessoa deve repensar suas práticas em relação ao meio ambiente. Devemos repensar, por exemplo, nosso consumo e como fazemos o descarte dos nossos resíduos. Repensar é o início dessa mudança. Recusar: Chama-se a atenção para o consumismo — a aquisição de bens que não são necessários — e também para que sejamos críticos em relação ao que consumimos. Devemos pensar em adquirir apenas aquilo que realmente necessitamos e, de preferência, de empresas preocupadas com o meio ambiente. Reduzir: Diz-se respeito, principalmente, ao nosso comportamento consumista. “Eu preciso realmente disso?” Faça essa pergunta sempre que for adquirir um novo produto. Além disso, reduzir significa poupar. Devemos saber economizar quando o assunto são os nossos recursos naturais. Esse é o caso, por exemplo, da água potável, que é, muitas vezes, utilizada de maneira indiscriminada. Reutilizar: É possível utilizar novamente alguns objetos que seriam descartados. Algumas embalagens podem ser reaproveitadas ou mesmo utilizadas para outras finalidades. Reciclar: Trata-se do reaproveitamento de um produto de modo que ele se torne matéria-prima para a fabricação de outro objeto. Reciclar é importante, pois ajuda a reduzir a quantidade de lixo gerado e também reduz a utilização dos nossos recursos naturais. Entre os materiais que podem ser reciclados estão: o papel, o plástico e o alumínio.`,
      id: '3',
    },
    {
      id: '4',
      title: 'Como reduzir a emissão de CO2',
      image: 'https://i.ibb.co/NxkkNYh/co2-globe-1-1030x833.png',
      content:
        'Importância de reduzir a emissão de carbono Antes de explicar como reduzir a emissão de poluentes na atmosfera, precisamos entender o contexto do problema. O famoso dióxido de carbono (CO2) tem diversas aplicações na sociedade quando está em sua forma gasosa — como na fabricação de bebidas, em controles de incêndio e até em intervenções cirúrgicas. Por outro lado, ele é maléfico para os seres humanos se inalado em grandes quantidades, irritando as vias respiratórias e, em casos mais graves, podendo causar mortes por asfixia. Como sabemos, o excesso de dióxido de carbono lançado diariamente na atmosfera tem papel preponderante no superaquecimento do planeta, o que gera desequilíbrio dos ecossistemas e impactos ambientais em grande escala. Por isso, combatê-lo se tornou uma necessidade urgente, sobretudo tendo em vista a quantidade de fontes poluentes que fazem parte do nosso cotidiano. O setor automobilístico e de transportes, por exemplo, é um dos principais emissores de CO2 no meio ambiente — além dos desmatamentos e queimadas florestais, que causam alterações climáticas em todo planeta. Sendo assim, o melhor caminho para reduzir a emissão de gases poluentes é reduzir o consumo de combustíveis fósseis e barrar os desmatamentos. O plantio de árvores, inclusive, tem sido uma medida bastante usual nesse combate. No entanto, vale lembrar que essa não é uma alternativa 100% eficaz, já que as espécies vegetais — que neutralizam o CO2 no processo de fotossíntese — não dão conta de absorvê-lo na mesma velocidade em que o produzimos. \n\n Vá de carona para o trabalho\n\n O hábito de compartilhar caronas é uma solução inteligente para diminuir os impactos ambientais gerados pelo excesso de veículos em circulação. Existem aplicativos de caronas corporativas para você chegar ou sair do serviço de um jeito fácil, prático e seguro. O Bynd, por exemplo, conecta usuários cadastrados e concentrados em regiões empresariais de grandes centros urbanos. Assim, funcionários que fazem rotas semelhantes podem dividir a corrida, revezando-se na oferta caroneira. É ou não é genial? \n\n Considere também ir de bike\n\n Já pensou que maravilha não ter que se preocupar com combustível, seguro, IPVA, estacionamento, flanelinha, entre várias outras despesas? Saindo de bike você deixa todos esses problemas para trás. É claro que uma bicicleta segura e bem equipada também demanda investimento e manutenção — mas nem se compara aos custos do carro. Sem falar no melhor: fugir do trânsito, contemplar a paisagem e relaxar enquanto pedala. Tudo isso poupando o meio ambiente dos gases tóxicos da combustão automotiva. Pode até ser que no início você estranhe um pouco a experiência, porém os benefícios são tantos que logo se acostuma.\n\n Utilize o transporte público\n\n Como vimos, o universo dos automóveis e a indústria de transportes são responsáveis por grande parte do CO2 que polui a atmosfera. Isso acontece por conta do processo de queima dos combustíveis (gasolina, álcool, diesel etc.). Portanto, quanto menos veículos estiverem em circulação, melhor é para o planeta. \n\n ',
    },
  ],
  registration: [
    {
      id: '1',
      course: '2',
      status: 'done',
      user: '1',
    },
  ],
  challenge: [
    {
      id: '1',
      course: '1',
      questions: [
        {
          id: '1',
          title: 'O Dioxido de carbono é essencial para a vida na terra?',
          result: true,
        },
        {
          id: '2',
          title: 'oi',
          result: false,
        },
      ],
    },
    {
      id: '2',
      course: '2',
      questions: [
        {
          id: '1',
          title: 'A amazônia esta presente apenas no Brasil?',
          result: false,
        },
      ],
    },
    {
      id: '3',
      course: '3',
      questions: [
        {
          id: '1',
          title: 'Reciclar é igual a poupar ?',
          result: true,
        },
      ],
    },
    {
      id: '4',
      course: '4',
      questions: [
        {
          id: '1',
          title: 'Fazer revisão no carro ajuda a reduzir a emissão de co2 ?',
          result: true,
        },
      ],
    },
  ],
};
