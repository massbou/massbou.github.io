function slideleft() {
    $('.sidebar').css({
        'left': '0'
    });
}

function yScroll() {
    var top = document.getElementById('monter');
    var y = window.pageYOffset;
    if(window.innerWidth > 769)
    {
        if (y > 800) {
            top.style.display = "initial";
            logo.classList.remove('logo');
            logo.classList.add('logo2');
            head.classList.remove('head');
            head.classList.add('head2');
        } else {
            top.style.display = "none";

            logo.className= " ";
            logo.classList.add('logo');
            head.className= " ";
        }
    }
    else
    {
        if (y > 445) {
            top.style.display = "initial";
        } else {
            top.style.display = "none";
        }
    }

}

window.addEventListener("scroll", yScroll);

var main = function() {
    //Quand on clique sur l'element contenant la classe "icon-menu" ,
    //on anime l'element qui a comme classe "menu" en le deplacant
    //jusqu'a la bordure gauche.

    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 250);

        //et on deplace tout le contenu de l'element "content" pour le
        //mettre a 60vw de la bordure gauche.

        $('.content').animate({
            left: "52.5vw"
        }, 250);
    });


    //Quand on clique sur l'element contenant la classe "icon-close",
    //tout est remis en place.

    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-60vw"
        }, 250);

        $('.content').animate({
            left: "0px"
        }, 250);
    });

    $('#monter').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $('.link_equipe').click(function() {
        $("html, body").animate({
            scrollTop: 2900
        }, "slow");
        return false;
    });
};


$(document).ready(main);
