function calcular () {

    var operacao = document.getElementById('operation').value;

    //alert(operacao);

    var num1 = document.getElementById('firstNumber').value;

    var num2 = document.getElementById('secondNumber').value;



    if(num1 == '' || num1 == null){
        alert('Favor digitar um número válido para a operação (num1)');
        return false; //encerra a função aqui já
    }

    if(num2 == '' || num2 == null){
        alert('Favor digitar um número válido para a operação (num2)');
        return false; //encerra a função aqui já
    }

    var resultado = null; //inicializando a variável

    //forçando o tipo de variável
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(operacao){

        case '1': //subtracao
            resultado = num1 - num2;
            break;
        case '2': //adição
            resultado = num1 + num2;
            break;
        case '3': //multiplica
            resultado = num1 * num2;
            break;
        case '4': //divide
            resultado = num1 / num2;
            break;
        default:
            ('A opção selecionada é inválida');
            return false;
    }

    document.getElementById('result').value = resultado;
}