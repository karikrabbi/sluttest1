const button = document.getElementById("dropdownbutton"); //döp html knapp till button
const dropdown = document.getElementById("dropdown"); //döp html dropdownknapp till dropdown
const tom = document.getElementById("tom");

button.addEventListener("click", function() { //lyssna efter ett klick på button elementen
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

let pris = 0; //skapa pris variabel

let mus1 = 0; //skapa mus variabler för carten
let mus2 = 0;
let mus3 = 0;
let mus4 = 0;
let mus5 = 0;
let mus6 = 0;

function uppdateralista() { //skapa en uppdaterings funktion för carten
  document.getElementById("cartlist").innerHTML =
  (mus1 > 0 ? "Mus 1 " + mus1 + "x<br>" : "") +
  (mus2 > 0 ? "Mus 2 " + mus2 + "x<br>" : "") +
  (mus3 > 0 ? "Mus 3 " + mus3 + "x<br>" : "") +
  (mus4 > 0 ? "Mus 4 " + mus4 + "x<br>" : "") +
  (mus5 > 0 ? "Mus 5 " + mus5 + "x<br>" : "") +
  (mus6 > 0 ? "Mus 6 " + mus6 + "x<br>" : "");
}

document.getElementById("pris").innerHTML = pris;

document.getElementById("button1a").addEventListener("click", function(){
  pris = pris + 500; //lägg till 500 till totala priset
  mus1 = mus1 + 1; //lägg till en mus i carten
  document.getElementById("pris").innerHTML = pris; // uppdatera priset
  uppdateralista();
})

document.getElementById("button1r").addEventListener("click", function(){
  if (mus1 > 0) {
    pris = pris - 500;
    mus1 = mus1 - 1;
  }

  document.getElementById("pris").innerHTML = pris;

  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }

  uppdateralista();
})

document.getElementById("button2a").addEventListener("click", function(){
  pris = pris + 500;
  mus2 = mus2 + 1;
  document.getElementById("pris").innerHTML = pris;
  uppdateralista();
})

document.getElementById("button2r").addEventListener("click", function(){
  if (mus2 > 0) {
    pris = pris - 500;
    mus2 = mus2 - 1;
  }

  document.getElementById("pris").innerHTML = pris;

  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }

  uppdateralista();
})

document.getElementById("button3a").addEventListener("click", function(){
  pris = pris + 500;
  mus3 = mus3 + 1;
  document.getElementById("pris").innerHTML = pris;
  uppdateralista();
})

document.getElementById("button3r").addEventListener("click", function(){
  if (mus3 > 0) {
    pris = pris - 500;
    mus3 = mus3 - 1;
  }

  document.getElementById("pris").innerHTML = pris;

  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }

  uppdateralista();
})

document.getElementById("button4a").addEventListener("click", function(){
  pris = pris + 500;
  mus4 = mus4 + 1;
  document.getElementById("pris").innerHTML = pris;
  uppdateralista();
})

document.getElementById("button4r").addEventListener("click", function(){
  if (mus4 > 0) {
    pris = pris - 500;
    mus4 = mus4 - 1;
  }

  document.getElementById("pris").innerHTML = pris;

  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }

  uppdateralista();
})

document.getElementById("button5a").addEventListener("click", function(){
  pris = pris + 500;
  mus5 = mus5 + 1;
  document.getElementById("pris").innerHTML = pris;
  uppdateralista();
})

document.getElementById("button5r").addEventListener("click", function(){
  if (mus5 > 0) {
    pris = pris - 500;
    mus5 = mus5 - 1;
  }

  document.getElementById("pris").innerHTML = pris;

  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }

  uppdateralista();
})

document.getElementById("button6a").addEventListener("click", function(){
  pris = pris + 500;
  mus6 = mus6 + 1;
  document.getElementById("pris").innerHTML = pris;
  uppdateralista();
})

document.getElementById("button6r").addEventListener("click", function(){
  if (mus6 > 0) {
    pris = pris - 500;
    mus6 = mus6 - 1;
  }

  document.getElementById("pris").innerHTML = pris;

  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }

  uppdateralista();
})

document.getElementById("tom").addEventListener("click", function(){  //om carten töms ska alla objekt sättas = 0
  pris = 0;

  mus1 = 0;
  mus2 = 0;
  mus3 = 0;
  mus4 = 0;
  mus5 = 0;
  mus6 = 0;

  document.getElementById("pris").innerHTML = pris;
  uppdateralista();
})