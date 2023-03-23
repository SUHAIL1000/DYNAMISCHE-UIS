let loggedIn = [];

function handleLogin(){
    console.log(loggedIn); // loggen de array
    console.log(Date())
    
    let naam = document.getElementById('inputNaam').value; // stap 1 ophalen input
    if (naam.length <= 0){
        alert("Voer een naam in!")
        return
    }
    console.log("U hebt op de button geklikt");

    if (loggedIn.includes(naam)){ // stap 2 bepalen of persoon in de array zit
        loggedIn.splice(loggedIn.indexOf(naam), 1); // stap 3 verwijder uit array
        console.log("U bent uitgelogd");
        document.getElementById('melding').innerText = 'U bent uitgelogd: ' + naam;

    } else { // Niet ingelogd, dan toevoegen aan array
        loggedIn.push(naam); // stap 
        console.log("U bent ingelogd"); // Voeg naam toe aan array
        document.getElementById('melding').innerText = 'U bent ingelogd: ' + naam;
    }
    document.getElementById('inputNaam').value = '';
    console.log(loggedIn);
    // console.log("U bent ingelogd: " + naam);
    // document.getElementById('melding').innerText = 'Gelukt';

}

document.getElementById("inlogButton").onclick = handleLogin;