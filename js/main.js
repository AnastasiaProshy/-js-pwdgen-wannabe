const firstName = prompt('Please enter your name');
const lastName = prompt('Please enter your surname');
const color = prompt('Please enter your favorite color');
const BYear = prompt(`Write your b-day year`);
const Bday = prompt(`Write down the day you were born`);

//OUTPUT STRING******************
const output = `

******Dates*******

name: ${firstName}
surname: ${lastName}
color: ${color}
Birth-year: ${BYear}
Birthday: ${Bday}

******Generate Password******
`;


console.log(output);

const pWord = ` Suggested password: ${firstName}${lastName}${color}`;
console.log(pWord);
//DOM output
// console.log(pWord);
// document.getElementById('PW').innerHTML = pWord;
//OPERATION
// const pWordN = ``;

const pwN = BYear / Bday;
const rounded = pwN.toFixed(2)
console.log(rounded);

// Concatenazione di pWord e pwN

const pWordN = pWord + pwN;

console.log(pWordN);

document.getElementById('PW').innerHTML = pWordN;

