/*
    1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
    (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
    ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

const fibo = (n: number) => {
  const sequencia = [0, 1];

  if (n === 0 || n === 1) {
    console.log(`Número ${n} pertence a sequência de fibonacci.`);
    return;
  }

  for (let i = 0; i < n; i++) {
    const nextNum = sequencia[i + 1];
    if (nextNum === n) {
      console.log(`Número ${n} pertence a sequência de fibonacci.`);
      return;
    }
    if (nextNum > n) {
      console.log(`Número ${n} não pertence a sequência de fibonacci.`);
      return;
    }
    const prevNum = sequencia[i];
    sequencia.push(nextNum + prevNum);
  }
};

// Não pertence
fibo(1236217367213682);

fibo(233);
