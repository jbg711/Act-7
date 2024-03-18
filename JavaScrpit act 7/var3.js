let myName = 'Default';
myName = 'Chris'; // Corregido: Cambié la asignación de constante a let para permitir la reasignación.

let myAge = 42; // Corregido: Eliminé las comillas alrededor del número para representar correctamente un valor numérico.



section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`; // Corregido: Eliminé las comillas alrededor de myAge + 20 para permitir la operación aritmética.
section.appendChild(para1);
section.appendChild(para2);