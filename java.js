const button = document.getElementById("dropdownbutton");
const dropdown = document.getElementById("dropdown");

button.addEventListener("click", function() {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});


let pris=0

document.getElementById("pris").innerHTML = pris;
document.getElementById("button1a").addEventListener("click", function(){
  pris=pris+500;
  document.getElementById("pris").innerHTML = pris;
})
document.getElementById("button1r").addEventListener("click", function(){
  pris=pris-500;
  document.getElementById("pris").innerHTML = pris;
  if (pris < 0) {
    pris = 0;
    document.getElementById("pris").innerHTML = pris;
  }
})


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