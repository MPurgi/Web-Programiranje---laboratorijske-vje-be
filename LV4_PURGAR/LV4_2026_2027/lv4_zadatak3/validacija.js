const kolegiji = [
    'Web programiranje',
    'Programsko Inženjerstvo',
    'Baze Podataka',
    'Digitalne komunikacije',
    'Operacijski Sustavi',
    'Algoritmi i Strukture Podataka',
    'Primijenjeno strojno učenje',
    'Osnove 3D modeliranja',
];

const ECTS = 5;
const rezultat = document.getElementById('rezultat');
const popis = document.getElementById('popis');

const polje = {
    forma: document.getElementById('prijava'),
    ime: document.getElementById('ime'),
    email: document.getElementById('email'),
    broj: document.getElementById('brojKolegija'),
    popis: popis,
    rezultat: rezultat
};

function poruka(tekst, greska=false) {
    rezultat.textContent = tekst;
    rezultat.classList.toggle("greska", greska);
}

function procitajImePrezime() {
    const tekst = polje.ime.value.trim();
    if(tekst == ""){
        return null;
    }
    const dijelovi = tekst.split(" ").filter((d) => d != "");
    if (dijelovi.length < 2) {
        return null;
    }
    return{
        ime: dijelovi[0],
        prezime: dijelovi.slice(1).join(" ")
    };
}

function procitajBroj() {
    const tekst = polje.broj.value.trim();
    if(tekst == ""){
        return null;
    }
    const n = Number(tekst);
    if(!Number.isInteger(n) || n < 1 || n > 8){
        return null;
    }
    return n;
}

function provjeriEmail(email) {
    const poz = email.indexOf("@");

    if(poz == -1){
        return "E-mail adresa mora sadržavati znak @.";
    }
    if(poz != email.lastIndexOf("@")){
        return "E-mail adresa smije sadržavati samo jedan znak @.";
    }
    if(poz<2){
        return "Prije znaka @ moraju biti barem 2 znaka.";
    }
    
    const nakonMajmuna = email.slice(poz + 1);
    if(nakonMajmuna.length < 2){
        return "Nakon znaka @ moraju biti barem 2 znaka.";
    }
    if(nakonMajmuna.indexOf(".") == -1){
        return "Nakon znaka @ mora postojati točka.";
    }

    const zadnjaTocka = email.lastIndexOf(".");
    if(email.length - zadnjaTocka - 1 < 2){
        return "Nakon zadnje točke moraju biti barem 2 znaka.";
    }
    return "";
}

document.getElementById('pozdrav').addEventListener("dblclick", () => {
    const osoba = procitajImePrezime();
    if(osoba == null){
        alert("Unesite ime i prezime.");
    } else {
        alert(`Dobro došli, ${osoba.ime} ${osoba.prezime}!`);
    }
});

const pomoc = document.getElementById('pomoc');
pomoc.addEventListener("mouseover", () => {
    poruka("Broj kolegija mora biti između 1 i 8.");
});
pomoc.addEventListener("mouseout", () => {
    poruka("");
});

document.getElementById('kolegiji').addEventListener("mouseup", () => {
    const n = procitajBroj();
    if(n == null){
        poruka("Upozorenje: broj kolegija mora biti cijeli broj između 1 i 8.", true);
        return;
    }
    const redovi = kolegiji.slice(0, n).map((k, i) => `Kolegij ${i+1}: ${k}`);
    polje.popis.value = redovi.join("\n");
    poruka(`Ukupno ECTS bodova: ${n * ECTS}`);
});


document.getElementById('obrisi').addEventListener("click", () => {
    if(confirm("Želite li obrisati popis odabranih kolegija?")){
        polje.popis.value = "";
        poruka("Popis kolegija je obrisan.");
    }
});

document.getElementById('prijavi').addEventListener("click", () => {
    const osoba = procitajImePrezime();
    if(osoba == null){
        alert("Unesite ime i prezime.");
        return;
    }

    const email = polje.email.value.trim();
    const greska = provjeriEmail(email);
    if(greska != ""){
        alert(greska);
        return;
    }

    const n = procitajBroj();
    if(n == null){
        alert("Broj kolegija mora biti cijeli broj između 1 i 8.");
        return;
    }

    if(polje.popis.value == ""){
        alert("Popis kolegija je prazan.");
        return;
    }

       const potvrda = confirm(
       `Vaše ime je ${osoba.ime}, vaše prezime ${osoba.prezime}, vaša e-mail adresa ${email}. ` +
       `Broj kolegija: ${n} (${n * ECTS} ECTS). Potvrđujete li prijavu?`
   );

    polje.forma.reset();
    poruka(potvrda ? "Prijava je zaprimljena." : "Prijava je otkazana.");
});