
$(function () {

    let razvrstano = 0;

    $(".kvadrat").draggable({
        revert: "invalid"
    });

    $("#crni-spremnik").droppable({
        accept: "#crni-kvadrat",

        drop: function (event, ui) {
            $(this).css("background-color", "black");

            ui.draggable.draggable("disable");

            razvrstano++;

            provjeriKraj();
        }
    });

    $("#crveni-spremnik").droppable({
        accept: "#crveni-kvadrat",

        drop: function (event, ui) {
            $(this).css("background-color", "red");

            ui.draggable.draggable("disable");

            razvrstano++;

            provjeriKraj();
        }
    });

    function provjeriKraj() {
        if (razvrstano === 2) {
            $("#poruka").text("Osvježi stranicu za početak.");
        }
    }

});
