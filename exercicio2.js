/*
    2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
*/

let string = 'Aaa'; // Digite aqui o texto que você deseja verificar

let qntd_letras = 0; // iniciando a variavel contadora

for (let i = 0; i < string.length; i++){ // percorrendo minha string até que o meu indice seja menor que o tamanho do seu texto (string.lenght);
    let letra = string[i]; // criando a variavel que receberá o valor da letra atual do texto que estou percorrendo no momento.
    if(letra == 'a' || letra == 'A'){ // checando se a minha letra é igual a letra "a" (minusculo), ou "A" (maiusculo);
        qntd_letras++; // Aumentando meu contador de letras, basicamente sempre que a condição for verdadeira, meu contador aumenta em 1, indicando quantas vezes aquela condição (letra) foi A ou a
    }
    // console.log(letra); // Aqui é apenas para mostrar no console letra por letra do seu texto, caso queira testar, basta tirar as 2 barras que estão atrás do console.log.
}
console.log(qntd_letras); // Mostro a quantidade de vezes que a letra "a" ou "A" está presente no seu texto :)



// Você pode trocar qual tipo de letra quer checar a qualquer momento alterando a condição da linha 7, por exemplo, caso você queira verificar quantas letras "e" tenham no seu texto, basta que
// a sua linha 7 seja trocada por: if(letra == 'e' || letra == 'E'){.
// Divirta-se! :)