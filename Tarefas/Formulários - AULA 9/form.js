function alertar () {
    if (document.getElementById('nome').value === ""){
        alert('O campo NOME é obrigatório!');
    } else {
        console.log(document.getElementById('nome').value);
    }
    if (document.getElementById('sobrenome').value === ""){
        alert('O campo SOBRENOME é obrigatório!');
    } else {
        console.log(document.getElementById('sobrenome').value);
    }
    if (document.getElementById('inputEmail4').value === ""){
        alert('O campo EMAIL é obrigatório!');
    } else {
        console.log(documet.getElementById('inputEmail4').value);
    }
    if (document.getElementById('inputPassword1').value === ""){
        alert('O campo SENHA é obrigatório!');
    } else {
        console.log(documet.getElementById('inputPassword1').value);
    }
    if (document.getElementById('inputPassword2').value === ""){
        alert('O campo CONFIRMAÇÃO DE SENHA é obrigatório!');
    } else {
        console.log(documet.getElementById('inputPassword2').value);
        conferirSenha();

    }
}

function conferirSenha() {
    if (document.getElementById('texto1').value != document.getElementById('texto2').value){
        alert('DIFERENTES');
    } else {
        console.log("IGUAIS");
    }
}