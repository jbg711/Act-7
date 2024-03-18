

const quoteStart = 'Don\'t judge each day by the harvest you reap '; // Escapamos el apóstrofe con \

const quoteEnd = 'but by the seeds that you plant.';
const finalQuote = quoteStart + quoteEnd;


section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);