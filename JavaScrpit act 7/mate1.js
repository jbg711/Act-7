let num1 = 8;
let num2 = 4;
let num3 = 5;
let num4 = 9;

let sum = num1 + num2;
let difference = num4 - num3;
let finalResult = sum * difference;

let evenOddResult = finalResult % 2;



section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);