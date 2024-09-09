/*
    4) Descubra a lógica e complete o próximo elemento:
    a) 1, 3, 5, 7, ___
    b) 2, 4, 8, 16, 32, 64, ____
    c) 0, 1, 4, 9, 16, 25, 36, ____
    d) 4, 16, 36, 64, ____
    e) 1, 1, 2, 3, 5, 8, ____
    f) 2,10, 12, 16, 17, 18, 19, ____
*/


/* RESPOSTA: 

    a: 1, 3, 5, 7, 9.                   Soma de 2 em 2. (1 + 2 = 3) , (3 + 2 = 5) e etc. 

    b: 2, 4, 8, 16, 32, 64, 128.        Dobra o valor atual. (2 * 2 = 4), (4 * 2 = 8), (8 * 2 = 16) e etc.

    c: 0, 1, 4, 9, 16, 25, 36, 49.      Soma de valores ímpares. (0 + 1 = 1), (1 + 3 = 4), (4 + 5 = 9) e etc.
    
    d: 4, 16, 36, 64, 100.              Quadrado dos valores pulando de 2 em 2. (2² = 4), (4² = 16), (6² = 36) e etc.

    e: 1, 1, 2, 3, 5, 8, 13.            Sequência de Fibonacci.

    f: 2, 10, 12, 16, 17, 18, 19, 20.   Sequência em que se subtrai o número sequente com o número atual, e a partir dessa diferença soma o número atual para chegar ao número sequente. ou seja:
                                        10 - 2 = 8, (8 + 2 = 10);
                                        12 - 10 = 2, (2 + 10 = 12);
                                        16 - 12 = 4, (4 + 12 = 16);
                                        17 - 16 = 1, (1 + 16 = 17);
                                        e etc.
*/

