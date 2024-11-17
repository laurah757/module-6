// 01 Aufgabe:

// Erstelle eine Funktion namens "fullName" die zwei Strings als Parameter übernimmt und sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).

// Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann


function fullName(firstname, lastname ) {
  return firstname + " " + lastname;
}

const myName = fullName("Laura", "Hartmann");
console.log(myName);

// 02 Aufgabe:

// Erstelle eine Funktion namens "capitalizeLetters" die einen String als Parameter übernimmt und jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.

// Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE

function capitalizeLetters(strings) {
  return strings.toUpperCase();
}

const result = capitalizeLetters("straSSenbaHn");
console.log(result);

// 03 Aufgabe:

// Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.

// Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6

function countCharacters(str) {
  return str.length;
}

const amount = countCharacters("Strassenbahn");
console.log(amount);

// Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als Parameter übernimmt und diese 
// als Währungswert im Format 0,00€ zurückgibt. 
// Verwende die toFixed() Methode, um zwei Nachkommastellen sicherzustellen, und ersetze den Punkt durch 
// ein Komma.

function formatToCurrency(num) {
  let formattedNum = num.toFixed(2);
  formattedNum = formattedNum.replace(".", ",");
  return formattedNum + "€";
}

const value = formatToCurrency(125.654);
console.log(value);