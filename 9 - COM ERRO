// Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética ou lexicográfica. No caso, “abcd” < “adbc” < “bacd”.

// Escreva uma função que receba uma string A e retorne uma string B, sendo que B é composta pelos mesmos caracteres que A reordenados.

// B deve obedecer às seguintes condições:

// Ser maior que A
// Ser a menor string possível que cumpra as condições acima
// Caso não seja possível encontrar uma string que cumpra as condições, retorne a string “sem reposta”.
// Por exemplo:

// A = “ab”
// Logo, o resultado será “ba”

// A = “abcde”
// Logo, o resultado será “abced”

// A = “ba”
// Nesse caso, o resultado será “sem resposta"



function menorStringMaior(name) {
  let array = [] ;
 let a;  
 let b;  
 let resultado = '' ;
  
 
 //jogo tudo para um array
   for (let i = 0; i<(name.length)  ; i++){
      array.push(name[i]);
     }
     
 //inverte os ultimos 2 caracteres se atender as especificações
     if(name.charCodeAt(name.length - 2)<=(name.charCodeAt(name.length -1 ) )){
         a =  array[array.length - 1];
         b = array[array.length - 2];
         array[array.length - 1] = b;
           array[array.length - 2] = a;
       //coloca tudo em uma unica string
           for(var i = 0; i < array.length; i++) {
             resultado += array[i];
         } 
         return(resultado);
 
     }  
     else{
         return('sem resposta');
     }
 
 
 
 }

 menorStringMaior("abcde")

 //ESSE CODIGO SÓ NÃO PASSOU EM DOIS TESTE, E EU NÃO CONSEGUI DEFINIR AS ENTRADA QUE DEU A SEGUINTES SAIDAS
 // expected 'sem resposta' to equal 'Qualiidef'
 // expected 'ddee' to equal 'dede'
