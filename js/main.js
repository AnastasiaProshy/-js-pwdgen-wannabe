const firstName = prompt('Please enter your name');
const lastName = prompt('Please enter your surname');
const color = prompt('Please enter your favorite color');
const BYear = prompt(`Write your b-day year`);
const Bday = prompt(`Write down the day you were born`);

//OUTPUT STRING******************
const output = `
x
******Dates*******

name: ${firstName}
surname: ${lastName}
color: ${color}
Birth-year: ${BYear}
Birthday: ${Bday}

******Generate Password******
`;
console.log(output);

const pWord = `Suggested password: ${firstName}${lastName}${color}`;
const pwN = BYear / Bday;

// Concatenazione di pWord e pwN
const pWordN = pWord + pwN;
console.log(pWordN);
document.getElementById('PW').innerHTML = pWordN;




// const pwNround = pwN.toFixed(2)
// console.log(pwNround);
//DOM output
// console.log(pWord);
// document.getElementById('PW').innerHTML = pWord;
//OPERATION
// const pWordN = ``;


