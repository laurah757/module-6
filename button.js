// 03 - Aufgaben: Button hinzufügen

// Aufgabe 1:
// Erstelle mit Hilfe von JavaScript einen Button innerhalb einer div.
// Tipp: im besten Fall bekommt der Button hier schon eine id.

// Aufgabe 2:
// Füge diesem Button wieder mit Hilfe von JavaScript den Text hinzu "<p></p> hinzufügen"

document.getElementById('btn').innerHTML = '<button id="button"></button>';
document.getElementById('button').innerText = "<p></p> hinzufügen";
document.getElementById('btn').classList.add('blue-bg'); 

document.getElementById('test-input').setAttribute('value', 77);

document.getElementById('text').title = 'Funktioniert das?';
document.getElementById('text').setAttribute('class', 'fancy');


function toggleNone(text) {
  document.getElementById('text').classList.toggle('d-none');
}

// 09 onekeyup/onekeydown

function logOnKeyUp() {
  console.log("onkeyup:", document.getElementById("input").value);
  
}

