const dranken = {
  fris: 2,
  bier: 3,
  wijn: 4,
};
let show = ''
let bestellingen = [];

function bestellingPlaatsen() {
  const bestelling = prompt("Welk drankje wilt u bestellen?").toLowerCase();
  if (!dranken[bestelling]) {
    alert("Sorry, we kennen dit drankje niet.");
    return;
  }
  const hoeveelheid = parseInt(prompt("Hoeveel "+bestelling+" wilt u hebben?"));
  bestellingen.push({ naam: bestelling, hoeveelheid: hoeveelheid, prijs: dranken[bestelling] });
}