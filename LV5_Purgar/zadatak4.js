
$(function () {

    let slikeSkrivene = false;

    $("#zelena").on("click", function () {
        $("ul").first().addClass("zelena");
    });

    $(".slike img").on("mouseenter", function () {
        $(this).addClass("crni-obrub");
    });

    $(".slike img").on("mouseleave", function () {
        $(this).removeClass("crni-obrub");
    });

    $(".slike img").on("click", function () {
        $(this).hide();
        slikeSkrivene = false;
    });

    $("#abrakadabra").on("click", function () {

        $(".slike img").stop(true, true);

        if (slikeSkrivene === false) {

            $(".slike img").eq(0).fadeOut("fast");
            $(".slike img").eq(1).fadeOut("slow");
            $(".slike img").eq(2).fadeOut(5000);

            slikeSkrivene = true;

        } else {

            $(".slike img").show();

            slikeSkrivene = false;
        }
    });

});
