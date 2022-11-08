// Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

// Exemplo:

// String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

// Lista de termos: ["a", "em", "i", "el"]

// K: 2

// Resultado: ["i", "a"]

// Explicação:

// Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

// Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.



function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    let escolhidos = queries;
    let sombra = [];
    let resultado = [];
    //aqui descobre o numero de vezes que o querie aparece
    for(let i=0 ; i<queries.length ; i++){
    sombra[i] = texto.split(queries[i]).length - 1;
    
    }
    //aqui ele ordena 
    for(let i =0 ; i<=sombra.length ; i++){
    
        for(let j = i+1; j<sombra.length ; j++){
    
            if(sombra[i]>sombra[j]){
                let a = sombra[i];
                let b = escolhidos[i];
                sombra[i] = sombra[j];
                escolhidos[i] = escolhidos[j];
                sombra[j] = a;
                escolhidos[j] = b;
            }
        }
    }
    sombra = sombra.reverse();
    escolhidos = escolhidos.reverse();
    
    for(let i=0; i<k ; i++){
    resultado.push(escolhidos[i]);
    }
    
    return(resultado);
    
    }

    calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2)


    //ESSE EU NÃO CONSEGUI FAZER 100% , E NÃO CONSEGUI ACHAR A ENTRADA QUE ESTAVA DANDO ERRO NA SEGUINTE SAIDA
    // expected [ 'i', 'a', 'el' ] to deeply equal [ 'i', 'a', 'em' ]
