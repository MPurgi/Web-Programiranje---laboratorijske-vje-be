<?php

$student = [
    "Mateo",
    "Purgar",
    "Stručni studij Računarstva",
    "165123123",
    "3"
];

$auto = [
    "Citroen" => [
        "model" => "C3",
        "obujam_motora" => "1.4",
        "boja" => "Zelena",
        "godina_proizvodnje" => 2008,
        "gorivo" => "Benzin"
    ],
    "Mercedes" => [
        "model" => "E220",
        "obujam_motora" => "2.0",
        "boja" => "Crna",
        "godina_proizvodnje" => 2018,
        "gorivo" => "Dizel"
    ]
];

function kvadrat($broj){
    return $broj * $broj;
}

class Kupac {
    private $ime;
    private $prezime;

    public function postaviIme($ime){
        $this->ime = $ime;
    }

    public function postaviPrezime($prezime){
        $this->prezime = $prezime;
    }

    public function opis(){
        return "Kupac je: " . $this->ime . " " . $this->prezime;
    }
}

$kupacOPG = new Kupac();
$kupacOPG->postaviIme("Djuro");
$kupacOPG->postaviPrezime("Djurinovic");

$broj = 5;
?>

<!DOCTYPE html>
<html lang="hr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadatak 1</title>
</head>
<body>
    
    <h1>Student</h1>

    <ul>
        <?php foreach ($student as $podatak) { ?>
            <li><?= htmlspecialchars($podatak) ?></li>
        <?php } ?>
    </ul>

    <h2>Podaci o automobilu Citroen</h2>

    <?php foreach ($auto["Citroen"] as $kljuc => $vrijednost) { ?>
        <p>
            <?= htmlspecialchars($kljuc) ?>:
            <?= htmlspecialchars((string)$vrijednost) ?>
        </p>
    <?php } ?>

    <h2>Podaci o automobilu Mercedes</h2>

    <p>Model: <?= htmlspecialchars($auto["Mercedes"]["model"]) ?></p>
    <p>Obujam motora: <?= htmlspecialchars($auto["Mercedes"]["obujam_motora"]) ?></p>
    <p>Boja: <?= htmlspecialchars($auto["Mercedes"]["boja"]) ?></p>
    <p>Godina proizvodnje: <?= htmlspecialchars($auto["Mercedes"]["godina_proizvodnje"]) ?></p>
    <p>Gorivo: <?= htmlspecialchars($auto["Mercedes"]["gorivo"]) ?></p>

    <h2>Funkcija kvadrat</h2>

    <p>Kvadrat broja <?= $broj ?> je <?= kvadrat($broj) ?></p>

    <h2>Podaci o kupcu</h2>

    <p><?= htmlspecialchars($kupacOPG->opis()) ?></p>

</body>
</html>