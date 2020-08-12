// var email = document.getElementById('inputEmail4').value;
// var password = document.getElementById('inputPassword4').value;
// var address = document.getElementById('inputAddress').value;
// var address2 = document.getElementById('inputAddress2').value;
// var city = document.getElementById('inputCity').value;
// var age = document.getElementById('inputAge').value;
// var cep = document.getElementById('inputCep').value;
// var aceito = document.getElementById('gridCheck').value;


function testaImprimaNoComando() {
    // var x = document.getElementById;
    // switch(x) {
    //     case x('inputEmail4').value != null:
    //         console.log(x('inputEmail4').value);
    //         break;
    //     case x('inputEmail4').value == null:
    //         alert("O campo de email é obrigatório!");
    //         break;        
    //     case x('inputPassword4').value != null:
    //         console.log(x('inputPassword4').value);
    //         break;
    //     case x('inputAddress').value != null:
    //         console.log(x('inputAddress').value);
    //         break;
    //     case x('inputAddress2').value != null:
    //         console.log(x('inputAddress2').value);
    //         break;
    //     case x('inputCity').value != null:
    //         console.log(x('inputCity').value);
    //         break;
    //     case x('inputAge').value != null:
    //         console.log(x('inputAge').value);
    //         break;
    //     case x('inputCep').value != null:
    //         console.log(x('inputCep').value);
    //         break;
    //     case x('gridCheck').value != null:
    //         console.log(x('gridCheck').value);
    //         break;
    // }

    if (document.getElementById('inputEmail4').value === ""){
        alert("O Campo Email é obrigatório!");
        return;
    } else{
        console.log(document.getElementById('inputEmail4').value);
    };

    if (document.getElementById('inputPassword4').value === ""){
        alert("O Campo Senha é obrigatório!");
        return;
    }else{
        console.log(document.getElementById('inputPassword4').value);
    };

    if (document.getElementById('inputPassword2').value === ""){
        alert("O Campo Confirmação de Senha é obrigatório!");
        return;
    }else{
        console.log(document.getElementById('inputPassword2').value);
    };

    if (document.getElementById('inputAddress').value === ""){
        alert("O Campo Address é obrigatório!");
        return;
    }else{
        console.log(document.getElementById('inputAddress').value);
    };

    if (document.getElementById('inputCity').value === ""){
        alert("O Campo City é obrigatório!");
        return;
    }else{
        console.log(document.getElementById('inputCity').value);
    };

    if (document.getElementById('inputAge').value === ""){
        alert("O Campo Age é obrigatório!");
        return;
    }else{
        console.log(document.getElementById('inputAge').value);
    };

    if (document.getElementById('inputCep').value === ""){
        alert("O Campo CEP é obrigatório!");
        return;
    }else{
        console.log(document.getElementById('inputCep').value);
    };

    if (document.getElementById('gridCheck').value === ""){
        alert("A confirmação com os termos de privacidade é obrigatória!")
        return;
    }else{
        console.log(document.getElementById('gridCheck').value);
    };

    //testando senhas
    if (document.getElementById('inputPassword4').value === document.getElementById('inputPassword2').value){
        console.log('Tudo ok com as senhas!');
    } else {
        alert('As senhas estão diferentes!');
        return;
    }



}

