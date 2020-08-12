// 1 - Crie uma função que recebe um número e verifica se ele é par ou ímpar
function parOuImpar (num) {
    if (num % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

primoOuNao = (n) => {
    num = n;
    while (n != 0) {
        divisor = 2;
        qtddDivisores = 1;
        while (divisor <= n){
            while (n % divisor == 0) {
                qtddDivisores += 1;
                n = n/divisor;
            }
            divisor += 1;
        }
        if ((qtddDivisores <= 2) && (num != 1)) {
            return true;
        } else {
            return false;
        }
    }
}

// console.log(primoOuNao(10));
// console.log(primoOuNao(9));
// console.log(primoOuNao(3));
// console.log(primoOuNao(5));
// console.log(primoOuNao(1));
// console.log(primoOuNao(2));

// function a(callback) {
//     setTimeout( function(){
//         callback();}, 3000);
//         console.log('a vem primeiro');
//     }


// function b(){
    
//     console.log( 'b vem depois');
// }

// // a( b );

function imprima(callback) {
    for (i = 10; i >= 1; i--) {
        console.log(i);
    }
    callback();
}

function anoNovo () {
    console.log('Feliz Ano Novo!');
}

imprima (anoNovo);
// Isso tá certo? Não teria que ir imprimindo os números e depois imprimir o string?

const imprimir = new Promise ((resolve, reject) => {
    if (number) {
        resolve("number");
    } else {
        reject("erro")
    }
})

imprimir
    .then(value => {
        console.log(value);
    })


// var array3 = array2.filter(function(numero){
//     return (numero >= 10);
// });

var array = [5,4,5,7,8,5,7,1,6,4,9,2,9,8,5,5,7,4,7,0];

function filtra (array) {
    console.log(array.filter(function(numero){
        return (numero > 7);
    }))
};

// (function(){
//     var a = 1;
//     console.log(a);
// })();

filtra(array)

var arrayDeObjetos = [
    product1 = {
        name: 'banana',
        price: 5,
    },
    product2 = {
        name: 'pão',
        price: 3,
    },
    product3 = {
        name: 'leite',
        price: 2.70,
    },
    product4 = {
        name: 'biscoito',
        price: 1.80,
    },
    product5 = {
        name: 'manteiga',
        price: 2,
    }
]

// let array = [1, 5, 7]
//     array.forEach(function(value, index) {
//         console.log("No índice: " + index + " o valor é " + value);
//     })

// array.reduce(function(total, numero){
//     return total + numero;
// })

function somaDaCompra (array) {
    var total = 0;
    array.forEach(function(value) {
        total += value.price;
    })
    console.log("O total da compra é R$".concat(total, "."));
}

somaDaCompra(arrayDeObjetos);


// console.log(s.concat("?", "!"));

// 8º ANO => HISTÓRIA
// 9º ano => física
    // Ambos às quartas


arrayDeObjetosEstudantis = [
    a1 = {
        nome: "Pedro Mascarenhas de Souza",
        serie: 8,
    },
    a2 = {
        nome: "Victor Ferreira Gomes",
        serie: 9,
    },
    a3 = {
        nome: "Tadeu Jureg",
        serie: 8,
    },
    a4 = {
        nome: "Rodrigo Vasques",
        serie: 8,
    },
    a5 = {
        nome: "Bruno Magalhães",
        serie: 9,
    },
    a6 = {
        nome: "Bernardo Munayer Morandi",
        sere: 8,
    },
    a7 = {
        nome: "Richardson Costa Lima",
        serie: 9,
    },
    a8 = {
        nome: "Sandra Viegas",
        serie: 9,
    },
    a9 = {
        nome: "Átila",
        serie: 8,
    },
    a10 = {
        nome: "Ronise Costa Lima",
        serie: 9,
    }

]

function escola (arrayDeObjetosEstudantis) {
    arrayDeObjetosEstudantis.forEach(function(value) {
        if (value.serie == 8) {
            console.log("> " + value.nome + ": História.")
        } else {
            console.log("> " + value.nome + ": Física.")
        }
    })
}

(escola(arrayDeObjetosEstudantis));


// RESOLUÇÃO DO ISAQUE:
// 3-Crie uma função que imprime de 10 até 1 e depois imprime
// na tela "feliz ano novo" através de uma callback.


function regressiva(callback) {
    setTimeout(function () { callback(); }, 3000);
    let contador = 0;
    let i = 10;
    while (i > contador) {
        console.log(i);
        i--;
    }
}
function anoNovo() {
    console.log('Feliz Ano Novo');
}

regressiva(anoNovo);


/*
4-Faça o mesmo utilizando Promise com concatenação de then.
*/

const teste01 = new Promise((resolve, reject) => {
    setTimeout( function() {
        let contador = 0;
        let i = 10;
        while (i > contador) {
        resolve("");
        console.log(i);
        i--;
    }}, 3000)
})

const test02 = new Promise((resolve, reject) => {
    resolve('Feliz Ano Novo');
})


teste01.then(function(res) {return console.log(res)})
.then(function() {return test02})
.then(function(res) {return console.log(res)});


/*
5-Agora repita a função utilizando o método async/await
// */

// const teste01 = new Promise((resolve, reject) => {
//     setTimeout( function() {
//         let contador = 0;
//         let i = 10;
//         while (i > contador) {
//         resolve("");
//         console.log(i);
//         i--;
//     }}, 3000)
// })

// const test02 = new Promise((resolve, reject) => {
//     resolve('Feliz Ano Novo');
// })

// const asyncFunction = async () => {
 
//     try{
//         const firstPart = await test01;
//         console.log(firstPart)
//         const secondPart = await test02S;
//         console.log(secondPart);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// asyncFunction();
