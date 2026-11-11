class Macka{
    constructor(ime, boja, dob, spol){
        this.ime = ime;
        this.boja = boja;
        this.dob = dob;
        this.spol = spol;
    }

    opis(){
        return `Mačka ${this.ime}, ${this.boja}, dob: ${this.dob}, spol: ${this.spol}`;
    }

    promijeniDob(novaDob){
        this.dob = novaDob;
    }
}

const tigar = new Macka("Tigar", "narančasta", 4, "muško");
const micika = new Macka("Micika", "bijela", 2, "žensko");

const ispisMacaka = document.getElementById("macke");
ispisMacaka.innerHTML = tigar.opis() + "<br>";

micika.promijeniDob(3);
ispisMacaka.innerHTML += `Nova dob Micike: ${micika.dob}`;

document.getElementById('izmjena').textContent = 
`Dokument je posljednji put izmijenjen: ${document.lastModified}`; 