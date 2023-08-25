/*
1. Crear una variable para guardar el mayor producto mayor inicializar con el valor  0 V
2. Iterar sobre el array con el índice i y detenerlo en el penúltimo elemento V
3. Coger el elemento en la posición i y multiplicarlo con su elemento adjacente en la posición i+1 producto V
4. Comparar con el producto mayor
5. Si producto > mayor, entonces mayor = producto
6. Retornar el mayor
*/

// Encuentra el mayor producto de elementos adyacentes
let adjacent = (inputArray) => {
  let mayor = -10000000;
  let producto = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {    
    producto = inputArray[i] * inputArray[i + 1];

    if (producto > mayor) {
      mayor = producto;
    }
  }

  return mayor;
}

// Encontrar el mayor elemento de un array
let elementoMayor = (inputArray) => {
  let mayor = -10000000; // el menor valor posible

  for (let i = 0; i < inputArray.length; i++) {    
    if (inputArray[i] > mayor) {
      mayor = inputArray[i];
    }
  }

  return mayor;
}

// Encontrar el menor elemento de un array
let elementoMenor = (inputArray) => {
  let menor = 10000000; // el mayor valor posible

  for (let i = 0; i < inputArray.length; i++) {    
    if (inputArray[i] < menor) {
      menor = inputArray[i];
    }
  }

  return menor;
}

console.log(adjacent([3, 6, -2, -5, 7, 3]));
console.log(elementoMayor([3, 6, -2, -5, 7, 3]));
console.log(elementoMenor([3, 6, -2, -5, 7, 3]));

/*
menor          1000000   3  3   -2  -5  -5  -5
mayor         -1000000   3  6   6   6   7   7
inputArray[i]        3   6  -2  -5  7   3
i                    0   1  2   3   4   5
*/