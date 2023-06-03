// Durante uma expedição tecnológica, sua equipe encontrou o que parece ser a senha que lhes dá acesso a um grande tesouro digital. Por sorte, sua equipe é formada pelas pessoas mais feras em programação e vocês rapidamente descobriram como decifrá-la.

// Com a possibilidade de que vocês encontrem mais códigos contendo outras senhas, você foi designado à tarefa de desenvolver um algoritmo que decifra os códigos para não precisarem fazer isso de forma manual.

// A senha é representada por um número binário de 10 dígitos formado pelo dígito predominante de cada coluna. Caso a coluna tenha a mesma quantidade de dígitos 0 e 1, deve se considerar o número 1.

// Exemplo: A primeira coluna da lista tem como dígito predominante o número 1, sendo assim, o primeiro dígito - dos 10 - da senha é 1.

// 0110100000
// 1001011111
// 1110001010
// 0111010101
// 0011100110
// 1010011001
// 1101100100
// 1011010100
// 1001100111
// 1000011000

// Desenvolva um algoritmo que receba um array de valores binários (como o exemplo acima) e retorne a representação decimal da senha.


function calculaNumeroDaSenha(senha) {
    
    let pilhafinal = [];
    let resultado = 0;
    let a=0,b=0;
//aqui eu coloco o resultado da recorrencia
    for(let i = 0 ; i<10 ; i++){

    for(let j = 0 ; j<10 ; j++){

        if(senha[j][i] == 1){
            a++;
        }
        else{
            b++;
        }
    }
    if(a>4){
        pilhafinal.push(1);
        }
        else {
            pilhafinal.push(0);
        }
        a=0;b=0;
    }


    //aqui eu transformo de binario para decimal
    for( let i = 1 ; i<=pilhafinal.length    ; i++){
resultado += pilhafinal[i -1] * ( Math.pow(2, pilhafinal.length - i ) )

    }
    console.log(resultado);
        


}

calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]);
