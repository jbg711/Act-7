const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

// Cambiar la letra mayúscula para corregir con mayúscula inicial la oración
const fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1).toLowerCase();

// Reemplazar "huevos verdes con jamón" con otro alimento que realmente no te guste
const newFood = 'sushi'; // Cambiar por el alimento que prefieras
const updatedQuote = fixedQuote.replace('Green eggs and ham', newFood);

// Agregar un punto al final de la cita
const finalQuote = updatedQuote + '.';

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);