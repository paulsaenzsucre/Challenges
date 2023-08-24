/*******
1. copiar la cadena en otra variable. V
2. voltear la cadena. V
3. comparar caracter por caracter las dos cadenas V
4. si algun par de caracteres no es igual, entonces no es un palindromo. V
5. si todos los pares de caracteres son iguales es un palindromo. V
*/

function solution(inputString) {
  let original = inputString.split("");
  let copia = inputString.split("").reverse();

  console.log(original, copia);
  
  for(let i = 0; i < original.length; i++) {
    if(original[i] !== copia[i]) {
      return "no es un palíndromo"
    }
  }

  return "Es un palíndromo";
}

let palindrome = (inputString) => {
  let original = inputString.split("");
  let copia = inputString.split("").reverse();

  console.log(original, copia);
  
  for(let i = 0; i < original.length; i++) {
    if(original[i] !== copia[i]) {
      return "no es un palíndromo"
    }
  }

  return "Es un palíndromo";
}

console.log(solution("erthre"));

console.log(palindrome("aabaa"));
