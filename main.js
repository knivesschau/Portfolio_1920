'use strict';

//this function hides all other HTML sections so the user lands on the tagline, footer, and nav links.
function hideHTML() {
    console.log("hideHTML ran");

    $(".about-page, .portfolio-page, .current-skillset, .contact-info").hide();
}

//this function shows other HTML sections when clicked on so that the user can navigate through the portfolio. 
function portNavigation() {
    console.log("portNavigation ran");

    $("#about-page").on("click", function(event) {
        console.log("click 1 ran!");
        $(".about-page").show();
        $(".portfolio-landing, .portfolio-page, .current-skillset, .contact-info").hide();
    });

    $("#portfolio").on("click", function(event) {
        console.log("click 2 ran!");
        $(".portfolio-page").show();
        $(".portfolio-landing, .about-page, .current-skillset, .contact-info").hide();
    });

    $("#skills").on("click", function(event){
        console.log("click 3 ran!");
         $(".current-skillset").show();
         $(".portfolio-landing, .about-page, .portfolio-page, .contact-info").hide();
    });

    $("#contact-page").on("click", function(event) {
        console.log("click 4 ran!");
        $(".contact-info").show();
        $(".portfolio-landing, .about-page, .portfolio-page, .current-skillset").hide();
    });
}

//this function resets the portfolio every time the user clicks "Home".
function resetPortfolio() {
console.log("resetPortfolio ran!");

    $("#home").on("click", function(event) {
        console.log("reset ran!");
        $(".portfolio-landing").show();
        hideHTML();
    });
}

//this function renders the default portfolio view in mobile AND desktop. 
function portfolioRender() {
    console.log("portfolioRender ran");
    hideHTML();
    portNavigation();
    resetPortfolio();
}

$(portfolioRender);