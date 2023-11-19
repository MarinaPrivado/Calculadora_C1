
function insert(num){
    
}
function clean(){
    
}
function back(){
    
}
function calcular (n1, operador, n2){
        let result = '';
        parseFloat(n1);
        parseFloat(n2);
        if (operador === '+') {
          result = n1 + n2;
        } else if (operador === '-') {
          result =  n1 - n2;
        } else if (operador === '*') {
          result = n1 * n2;
        } else if (operador === '/') {
          result = n1 / n2;
        }      
        return result;
      
}

module.exports = {insert, clean, back, calcular}
