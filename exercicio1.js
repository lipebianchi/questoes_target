/*
    1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
    escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
    pertence ou não a sequência.
*/ 


function fibonacci(valor){
    
    if(valor == 1 || valor == 0){ // Caso o valor seja 0 ou 1, automaticamente ele já faz parte da sequência, já que ela já se inicia em 0 e 1.
        return console.log('o seu valor faz parte da sequência de fibonacci');
    }

    let x = 0, y = 1, z;


    for(let i = 0; y < valor; i++){ // aqui crio a estrutura em que, enquanto o Y for menor que o meu valor a ser descoberto, ele continue somando os valores em sequência. 
        z = x + y; 
        x = y; /* Na sequência de Fibonacci, se você reparar bem, o valor x sempre passa a ser o antigo Y, veja: 
                  1º sequencia: (x = 0 + y = 1); 2º sequencia: (x = 1 + y = 1); 3º sequencia: (x = 1 + y = 2); 4º sequência: (x = 2 + y = 3)
                  Tendo isso em vista, no geral, cada próxima sequência em que você irá somar novamente o valor de x e y, basta que o novo valor de x passe a ser o antigo valor do y. */
        
        y = z; /* Seguindo a mesma lógica do x, o valor do Y sempre é o resultado da sequência passada, ou seja, enquanto o valor de X vira o antigo Y, o valor de Y passa a ser o antigo
                resultado.  
               */
    }

    if(y == valor) { // Após todo o For, eu checo se o Y que é o ultimo resultado é igual ao valor que eu queria descobrir. Caso o valor de Y seja igual, é por conta de que ele FAZ PARTE da minha sequência de fibonacci.
        return console.log('o seu valor faz parte da sequência de fibonacci');
    }else{
        return console.log('o seu valor não faz parte da sequência de fibonacci');
    }
}

(function main(){
    const numero_a_descobrir = 1; // Digite aqui o número que você deseja saber se faz parte da sequência de fibonacci;

    fibonacci(numero_a_descobrir); // Invoke da função fibonacci, passando como parametro o valor que você deseja descobrir.
})()



/*
    Caso você se pergunte o porque meu FOR utiliza o "<" na condição ao invés do "<=", é muito simples;
    Caso eu utilizasse o operador relacional "<=", haveria um erro, pois caso o valor fizesse parte da sequência, quando ele CHEGASSE a aquele valor, ele iria NOVAMENTE somar para a próxima
    sequência, e no final, o valor final do Y SEMPRE seria a soma da sequência seguinte, então caso eu fornecesse o valor de entrada "5", meu resultado seria, 8, caso digitasse o 8, meu resultado
    seria o 13 e assim por diante. :)
*/

