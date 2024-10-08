/*
    3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
*/

const INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K += 1;
  SOMA += K;
}

console.log(SOMA);
