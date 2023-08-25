/*
//crea una funcion que busque, llamada "findName" en un array el nombre "jorge",
// si esta imprima "the name (aqui llamas al nombre) exist" 
// si no "the name (aqui llamas al nombre) it´s not here "
['diego', 'jorge', 'enzo', 'german'];

1. Iterar el array con el indice i = 0 hasta que lo encuentra "the name exists"
2. Comparar el elemento de la posicion i  con el nombre buscado
2 . Si no lo encuentra devuelve "it´s not here"
*/

let findName = (inputArray, name) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === name ) {
      return "the name exists"
    }  
  }

  return "it's not here"
}

let includeName = (inputArray, name) => {
  if (inputArray.includes(name)) {
    return "the name exists"
  }

  return "it's not here"
}

let includeName2 = (inputArray, name) => inputArray.includes(name) ? "the name exists" : "it's not here";

console.log(findName(['diego', 'jorge', 'enzo', 'german'], "jorge"));
console.log(findName(['diego', 'jorge', 'enzo', 'german'], "jorges"));

console.log(includeName(['diego', 'jorge', 'enzo', 'german'], "jorge"));
console.log(includeName(['diego', 'jorge', 'enzo', 'german'], "jorges"));

console.log(includeName2(['diego', 'jorge', 'enzo', 'german'], "jorge"));
console.log(includeName2(['diego', 'jorge', 'enzo', 'german'], "jorges"));