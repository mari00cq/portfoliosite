window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  // Lyt efter klik på burger

  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}
// Hvor skal den gå hen når jeg har klikket - funktion
function toggleMenu() {
  console.log("toggleMenu");

  //   Her tager jeg fat i min menu og fjerner hidden hvis den er der eller tilføje hvis den ikke er der
  document.querySelector("#menu").classList.toggle("hidden");

  //   Jeg spørger om de classer som menu elementer har - indeholder det hidden...?
  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  //   Hvis den indeholder hidden, så er det her sandt, og så skal der vises burger
  //   og ellers skal der vises et kryds
  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "X";
  }
}
