let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

result *= result2; // Multiplica result por result2 y guarda el resultado en result

let finalResult = result.toFixed(2); // Formatea el resultado con 2 decimales y almacena en finalResult

let finalNumber = parseFloat(finalResult); // Convierte finalResult en un número y almacena en finalNumber


typeof finalNumber;


section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);