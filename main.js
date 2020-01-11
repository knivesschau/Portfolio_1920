'use strict';

//this function hides all other HTML sections so the user lands on the tagline, footer, and nav links.
function hideHTML() {
    console.log("hideHTML ran");

    $(".about-me, .portfolio-page, .current-skillset, .contact-info").hide();
}

//this function shows other HTML sections when clicked on so that the user can navigate through the portfolio. 
function portNavigation() {
    console.log("portNavigation ran");

    $("#about").on("click", function(event) {
        console.log("click 1 ran!");
        $(".about-me").show();
    });

    $("#portfolio").on("click", function(event) {
        console.log("click 2 ran!");
        $(".portfolio-page").show();
    });

    $("#skills").on("click", function(event){
        console.log("click 3 ran!");
         $(".current-skillset").show();
    });

    $("#contact").on("click", function(event) {
        console.log("click 4 ran!");
        $(".contact-info").show();
    });
}

//this function renders the default portfolio view in mobile AND desktop. 
function portfolioRender() {
    console.log("portfolioRender ran");
    hideHTML();
    portNavigation();
}

$(portfolioRender);