/* eslint-disable max-len */
/*
    2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
*/

const countLetters = (letter: string, text: string) => {
  // remove todos os espaços
  const words = text.split(' ');
  const wordsWithLetter = [] as string[];
  let countLetter = 0;

  // filtra apenas as palavras que possuem a letra a
  wordsWithLetter.push(...words.filter((word) => word.toLowerCase().includes(letter)));

  wordsWithLetter.forEach((word) => {
    // Filtra as letras
    const letters = word.toLowerCase().split('').filter((l) => l === letter);
    // Adiciona ao contador de acordo com a quantidade de elementos no array
    countLetter += letters.length;
  });
  console.log(`\n${countLetter} ${countLetter > 1 ? 'letras' : 'letra'} ${letter}`);
};

// eslint-disable-next-line max-len
countLetters('a', `Analisando o cenário atual, é evidente que as IAs têm se mostrado extremamente úteis em praticamente todas as áreas. Embora o avanço dessas tecnologias seja gradual, é apenas uma questão de tempo até que o "conhecimento em IA" se torne um requisito essencial para vagas em setores onde isso antes não era imaginado. O entendimento desse tema será de fundamental importância no curto a médio prazo, pois, caso os trabalhadores não se adaptem, correm o risco de serem substituídos por aqueles que dominam o assunto.

É importante destacar que o principal benefício das IAs reside na produtividade, e não necessariamente na qualidade, uma vez que, frequentemente, os resultados gerados por elas não são completamente confiáveis e requerem revisão. Isso torna indispensável a presença de alguém capacitado para validar esses resultados e utilizar as IAs como ferramentas de suporte, garantindo a velocidade e a qualidade final dos trabalhos.

Um exemplo claro dessa tecnologia pode ser visto nos próprios sites de contratação, que utilizam IAs como filtros para identificar os melhores candidatos. No entanto, como mencionado anteriormente, os dados gerados nem sempre são precisos, e detalhes sutis podem não ser considerados, o que pode desqualificar boas candidaturas que seriam valiosas para as empresas contratantes.

Por outro lado, esse tipo de tecnologia tem seu valor, especialmente em um contexto onde há um grande volume de candidatos para poucas vagas. O filtro realizado pelas IAs tende a destacar os candidatos que mais se adequam aos requisitos da vaga, o que otimiza o processo seletivo.

Apesar de inicialmente esse tema causar receio, principalmente entre aqueles que estão ingressando no mercado de trabalho, as IAs, na verdade, podem ser grandes aliadas. Elas auxiliam os trabalhadores a desempenharem suas funções de maneira mais eficiente e prática, facilitando diversas tarefas no dia a dia.

`);
