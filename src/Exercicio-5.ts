/**
     5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está,
        mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
        Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

        Solução: ligo um dos interruptores por algum tempo, e dpois apago e ligo outro interruptor, vou até uma das salas, e posso me deparar com 3 situações

        sala 1 - caso a lampada esteja apagada verifico se a mesma se encontra quente, caso sim essa é do interruptor que liguei e desliguei (vou dizer que foi o interruptor 1),
        sala 1 - caso a lampada esteja fria será o interruptor que não liguei (vou dizer que foi o interruptor 2),
        sala 1 - caso a lampada esteja acesa será o interruptor que liguei (vou dizer que foi o interruptor 3).

        Após isso volto para a sala dos interruptores com a certeza de que sei para onde um dos interruptores leva (digamos que tenha sido o caso do interruptor 2),
        agora basta manter do jeito que está, ir até a sala 2 e verificar se a lampada está acesa ou não,
        caso esteja é o interruptor 3, caso não é o interruptor 1.
        digamos que estava acesa então o resultado fica da seguinte forma: {
            sala-1: interruptor 2,
            sala-2: interruptor 3,
            sala-3: interruptor 1,
        }

*/
