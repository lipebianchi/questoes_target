/*
    5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, 
    mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, 
    usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  
*/

/* RESPOSTA: 


    Básicamente, para sabermos se uma lampada estava acesa, não existe apenas o fator visual, mas também o de toque.
    Quando uma lâmpada fica acesa por alguns minutos, ela produz calor, que é possivel sentir.
    Ou seja, para descobrirmos o valor das TRÊS, basta que:
    Acendamos o primeiro interruptor, e aguardemos alguns minutos, após isso, desligamos o 1º interruptor e ligamos o 2º.
    Logo após ligarmos o 2º interruptor, vamos direto para as salas, temos apenas 2 salas para checar, e não importa em qual ordem você escolha, ocorrerá da seguinte maneira:
    Caso a sala em que você entrou, esteja acesa, significa que aquela lampada pertence ao 2º interruptor.
    Caso ela esteja apagada e quente, significa que ela pertence ao 1º interruptor.
    Caso ela esteja apagada e fria, significa que ela pertence ao 3º interruptor.
    Como podemos checar 2 salas, basta fazer por eliminação.
    se em uma delas estiver apagada e quente, e a outra acesa, significa que a ultima sala pertence ao interruptor 3.
    se em uma delas estiver apagada e fria, e a outra apagada e quente, significa que a ultima sala pertence ao interruptor 2 e por aí vai.


*/

/*
    Esse problema foi abordado em uma série chamada: Alice in Borderland.
    Muito boa aliás caso queiram assistir! ;)
*/
