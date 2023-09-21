/* CAROUSEL 1*/

$(document).ready(function () {
    var carousel_width = 1080,
        slide_size = $(".slide div").length * carousel_width;

    $(".slide").css("width", slide_size);

    $(".carousel-left").click(function () {
        move_carousel($(".carousel-shown").prev());
    });
    $(".carousel-right").click(function () {
        move_carousel($(".carousel-shown").next());
    });

    $(document).keyup(function (e) {
        if (e.which == 37) {
            if ($(".carousel-shown").prev().length) {
                move_carousel($(".carousel-shown").prev());
            }
        } else if (e.which == 39) {
            if ($(".carousel-shown").next().length) {
                move_carousel($(".carousel-shown").next());
            }
        }
    });

});

function move_carousel(to_div) {
    var to_multiplier = to_div.index(),
        to_position = 0 - (to_multiplier * 480);

    $(".slide").animate({ left: to_position }, 500, function () {
        $(".carousel-shown").removeClass("carousel-shown");
        to_div.addClass("carousel-shown");
        if(!$(".carousel-shown").prev().length){
            $(".carousel-left").hide();
        }else{
            $(".carousel-left").show();
        }
        if(!$(".carousel-shown").next().length){
            $(".carousel-right").hide();
        }else{
            $(".carousel-right").show();
        }
    });
}

/* CAROUSEL 2*/

$(document).ready(function () {
    var carousel_width2 = 1080,
        slide_size2 = $(".slide2 div").length * carousel_width2;

    $(".slide2").css("width", slide_size2);

    $(".carousel-left2").click(function () {
        move_carousel2($(".carousel-shown2").prev());
    });
    $(".carousel-right2").click(function () {
        move_carousel2($(".carousel-shown2").next());
    });

    $(document).keyup(function (e) {
        if (e.which == 37) {
            if ($(".carousel-shown2").prev().length) {
                move_carousel2($(".carousel-shown2").prev());
            }
        } else if (e.which == 39) {
            if ($(".carousel-shown2").next().length) {
                move_carousel2($(".carousel-shown2").next());
            }
        }
    });

});

function move_carousel2(to_div) {
    var to_multiplier = to_div.index(),
        to_position = 0 - (to_multiplier * 480);

    $(".slide2").animate({ left: to_position }, 500, function () {
        $(".carousel-shown2").removeClass("carousel-shown2");
        to_div.addClass("carousel-shown2");
        if(!$(".carousel-shown2").prev().length){
            $(".carousel-left2").hide();
        }else{
            $(".carousel-left2").show();
        }
        if(!$(".carousel-shown2").next().length){
            $(".carousel-right2").hide();
        }else{
            $(".carousel-right2").show();
        }
    });
}