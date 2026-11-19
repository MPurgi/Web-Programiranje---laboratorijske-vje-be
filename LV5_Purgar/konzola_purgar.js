
// Provjera je li jQuery učitan
$.fn.jquery;

// 1. Ispis teksta naslova u konzolu
$("h1").text();

// 2. Promjena teksta odlomka
$("p").text("Ovo je novi tekst promijenjen pomoću jQueryja.");

// 3. Promjena boje pozadine odlomka
$("p").css("background-color", "yellow");

// 4. Promjena slike na stranici
$("img").attr("src", "druga.jpg");
