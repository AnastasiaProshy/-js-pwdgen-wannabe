const firstName = prompt('Please enter your name');
const lastName = prompt('Please enter your surname');
const color = prompt('Please enter your favorite color');
const BYear = prompt(`Write your b-day year`);
const Bday = prompt(`Write down the day you were born`);

//OUTPUT STRING******************
const output = `
************************
User Data:

name: ${firstName}
surname: ${lastName}
color: ${color}
Birth-year: ${BYear}
Birthday: ${Bday}

Let's generate password:

`;
console.log(output);

const pWord = `Suggested password: ${firstName}${lastName}${color}`;
const pwN = (BYear / Bday).toFixed(0);

// Concatenazione di pWord e pwN
const pWordN = pWord + pwN;
console.log(pWordN);
document.getElementById('PW').innerText = pWordN;


