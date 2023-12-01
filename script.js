function check_form(){
var nome =document.getElementById('nome').value;
var tel =document.getElementById'telefone').value;
var dtn =document.getElementById('dataNascimento').value;
var opGenero1 =document.getElementById('rgenero1').value;
var opgenero2 =document.getElementById('rgenero2').value;
var opgenero3 =document.getElementById('rgenero3').value;
var endereco =document.getElementById('adress').value;
var vaga =document.getElementById('vaga').value;

var opGenero1=document.getElementById('rgenero1').checked

if(nome==''){
    alert("preeencha o nome");
    return false;
}

if(tel==''){
    alert("Preeencha o telefone");
    return false;

}
if(dtn==''){
    alert("Preencha a data de nascimento");
    return false;

}
if(genero1==''){
    alert("opgenero1")&&("opgenero2")&&(opgenero3=='')) {

    return false;
         
}
if(endereco==''){
    alert("preencha o endereco");
}
if(vaga==''){
    alert("escolha a vaga");
    return false;
}









    var nome = document.getElementsById("nome").value;
if(!nome.length==0){
    alert("Preencha o nome");
    return false;
}
if(nome==){
    alert("preencha o nome");
}
    return true;
}