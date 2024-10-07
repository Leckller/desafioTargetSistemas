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
      console.log(sequencia);
      return;
    }
    const prevNum = sequencia[i];
    sequencia.push(nextNum + prevNum);
  }
};

fibo(1236217367213682);
