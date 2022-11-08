// Você está trabalhando para uma empresa que fornece materiais escolares e precisa da sua ajuda para entrar no mundo digital. Como primeira atividade, você identificou que não existe uma funcionalidade que é muito importante para a empresa ter mais controle sobre os valores dos produtos vendidos. Esta funcionalidade consiste em descobrir o maior e o menor valor dos produtos vendidos em um período de tempo, para cada vendedor.

// Os valores das vendas que devem ser consideradas podem variar entre 20 e 500 reais e estão agrupados por vendedores. Além disso, deve-se ignorar as devoluções, que estão indicadas com o valor 0.

// A sua função/método deverá receber uma lista vendas agrupadas por vendedores, (e.g. [[200, 100], [300]]) e retornar um array onde a primeira posição contém o menor valor e a segunda posição o maior valor (e.g. [100, 300]).

// Mas preste atenção! Algum vendedor pode não ter realizado vendas no período.




//-------------------------logica 1---------------------------------------------------------- 
// function retornaMenorEMaiorValorDeVendas(tickets) {

//     let menorvalor = tickets[0][0];
//     let maiorvalor = tickets[0][0];
//     let resultado = [];

//     for(let i = 0; i<tickets.length ; i++){
//                     for(let j = 0; j<tickets.length ; j++){
//                         if(tickets[i][j] > maiorvalor && tickets[i][j] <=500 ){
//                             maiorvalor = tickets[i][j];
//                         }
//                         else if(tickets[i][j] < menorvalor && tickets[i][j] >=20 ){
//                             menorvalor = tickets[i][j];
//                         }
                        
//                     }
//                 }
//                 resultado.push(menorvalor);
//                 resultado.push(maiorvalor);
//                 return(resultado);

// }


//-------------------------logica 2---------------------------------------------------------- 
//questão 2 

// function retornaMenorEMaiorValorDeVendas(tickets) {


//     let array = [];
//     let resul= [];


//     for(let i = 0; i<tickets.length ; i++){
//         for(let j = 0; j<tickets.length ; j++){
//             if(tickets[i][j] >=20 && tickets[i][j] <=500 ){
//                 array.push(tickets[i][j]);
//             }
//         }
//     }



//     for(let i = 0; i<array.length ; i++){
//         for(let j = i+1; j<array.length ; j++){
//             if(array[i]>array[j]){
//                 let b = array[i];
//                 array[i] = array[j];
//                 array[j] = b;
//             }
//         }
//     }

//     resul.push(array[0]);
//     resul.push(array[array.length - 1]);
//     return(resul);
    

// }



retornaMenorEMaiorValorDeVendas([[200,100],[300]])

//OBS: NO FINAL DAS CONTAS EU NÃO CONSEGUI FAZER ESSA SER ACEITA 100% 
//E EU NÃO ENCONTREI A ENTRADA QUE ESTAVA DANDO ESSE ERRO   expected [ 100, 100 ] to deeply equal [ 100, 350 ]  
