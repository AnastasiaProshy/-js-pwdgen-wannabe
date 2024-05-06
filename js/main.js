const firstName = prompt('Please enter your name');
const lastName = prompt('Please enter your surname');
const color = prompt('Please enter your favorite color');

// //OUTPUT STRING******************
const output = `

// ******Dates*******

// name: ${firstName}
// surname: ${lastName}
// color: ${color}

// ******Generate Password******
// `;


console.log(output);


const pWord = ` Suggested password: ${firstName}${lastName}${color}34`;

console.log(pWord);

document.getElementById('PW').innerHTML = pWord;
