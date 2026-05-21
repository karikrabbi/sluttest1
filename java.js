const button = document.getElementById("dropdownbutton"); //döp html knapp till button
const dropdown = document.getElementById("dropdown"); //döp html dropdownknapp till dropdown

button.addEventListener("click", function() { //Lyssna efter ett klick på button elementen
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});


let pris=0 //skapa pris variabel

document.getElementById("pris").innerHTML = pris; //hämta pris värde
document.getElementById("button1a").addEventListener("click", function(){ //lyssna efter klick på add knappen på första varan
  pris=pris+500; //lägg till 500kr till pris variabeln
  document.getElementById("pris").innerHTML = pris; //uppdatera
})
document.getElementById("button1r").addEventListener("click", function(){ //lyssna efter klick på remove knappen på första varan
  pris=pris-500; //ta bort 500kr från pris variabeln
  document.getElementById("pris").innerHTML = pris;
  if (pris < 0) { //om pris blir negativt, så ställs priset till 0
    pris = 0;
    document.getElementById("pris").innerHTML = pris; //uppdatera
  }
})
          //samma för alla andra varor

document.getElementById("pris").innerHTML = pris;
document.getElementById("button2a").addEventListener("click", function(){
  pris=pris+500;
  document.getElementById("pris").innerHTML = pris;
})
document.getElementById("button2r").addEventListener("click", function(){
  pris=pris-500;
  document.getElementById("pris").innerHTML = pris;
  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }
})


document.getElementById("pris").innerHTML = pris;
document.getElementById("button3a").addEventListener("click", function(){
  pris=pris+500;
  document.getElementById("pris").innerHTML = pris;
})
document.getElementById("button3r").addEventListener("click", function(){
  pris=pris-500;
  document.getElementById("pris").innerHTML = pris;
  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }
})


document.getElementById("pris").innerHTML = pris;
document.getElementById("button4a").addEventListener("click", function(){
  pris=pris+500;
  document.getElementById("pris").innerHTML = pris;
})
document.getElementById("button4r").addEventListener("click", function(){
  pris=pris-500;
  document.getElementById("pris").innerHTML = pris;
  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }
})


document.getElementById("pris").innerHTML = pris;
document.getElementById("button5a").addEventListener("click", function(){
  pris=pris+500;
  document.getElementById("pris").innerHTML = pris;
})
document.getElementById("button5r").addEventListener("click", function(){
  pris=pris-500;
  document.getElementById("pris").innerHTML = pris;
  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }
})


document.getElementById("pris").innerHTML = pris;
document.getElementById("button6a").addEventListener("click", function(){
  pris=pris+500;
  document.getElementById("pris").innerHTML = pris;
})
document.getElementById("button6r").addEventListener("click", function(){
  pris=pris-500;
  document.getElementById("pris").innerHTML = pris;
  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }
})

if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }