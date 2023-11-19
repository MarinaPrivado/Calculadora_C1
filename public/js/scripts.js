
function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById("resultado").innerHTML = numero + num
}
function clean(){
    document.getElementById('resultado').innerHTML = ""
}
function back(){
    
}
function calcular(){
    
}

module.exports = {insert, clean, back, calcular}
