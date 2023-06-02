function calcular() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado;
  
    if (operacion === '+') {
      resultado = num1 + num2;
    } else if (operacion === '-') {
      resultado = num1 - num2;
    } else if (operacion === '*') {
      resultado = num1 * num2;
    } else if (operacion === '/') {
      resultado = num1 / num2;
    }
  
    document.getElementById('resultado').value = resultado;
  }
  