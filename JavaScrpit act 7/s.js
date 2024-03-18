const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

// Calculamos la longitud de la hipotenusa usando el teorema de Pitágoras
const c = Math.sqrt(a ** 2 + b ** 2);

// Utilizamos una plantilla literal para la cadena
const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${c}.`;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);