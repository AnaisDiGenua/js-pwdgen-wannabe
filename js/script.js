// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21 (esempio pipporossigreen21)



// dichiarazione e assegnazione variabili
const yourName = prompt('insert your name');
console.log(yourName);

const yourSurname = prompt('insert your surname');
console.log(yourSurname);

const yourFavColor = prompt('insert your favourite color');
console.log(yourFavColor);




// creazione password
let password = yourName + yourSurname + yourFavColor + '21';
document.getElementById('password-gn').innerHTML = password;
console.log(password);


