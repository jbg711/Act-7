const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here

const quoteLength = quote.length; // Obtenemos la longitud de la cita y la almacenamos en quoteLength

const index = quote.indexOf(substring); // Buscamos la posición del índice donde aparece substring en quote y almacenamos el valor en index

const revisedQuote = quote.slice(0, index) + substring + quote.slice(index + substring.length); // Recortamos la cita original y la almacenamos en revisedQuote



section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);