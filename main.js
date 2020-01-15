'use strict';

//this function hides all other HTML sections so the user lands on the tagline, footer, and nav links.
function hideHTML() {
    $(".about-page, .portfolio-page, .current-skillset, .contact-info, .portfolio-landing").hide();
    $("document").ready(function() {
        $(".portfolio-landing").fadeIn(2000);
    });
}

//this function shows other HTML sections when clicked on so that the user can navigate through the portfolio. 
function portNavigation() {
    $("#about-page").on("click", function(event) {
        $(".about-page").fadeIn(600);
        $(".portfolio-landing, .portfolio-page, .current-skillset, .contact-info").hide();
    });
    

    $("#portfolio").on("click", function(event) {
        $(".portfolio-page").fadeIn(600);
        $(".portfolio-landing, .about-page, .current-skillset, .contact-info").hide();
    });

    $("#skills").on("click", function(event){
         $(".current-skillset").fadeIn(600);
         $(".portfolio-landing, .about-page, .portfolio-page, .contact-info").hide();
    });

    $("#contact-page").on("click", function(event) {
        $(".contact-info").fadeIn(600);
        $(".portfolio-landing, .about-page, .portfolio-page, .current-skillset").hide();
    });
}

//this function resets the portfolio every time the user clicks "Home".
function resetPortfolio() {
    $("#home").on("click", function(event) {
        hideHTML();
    });
}

//this function renders the default portfolio view in mobile AND desktop. 
function portfolioRender() {
    hideHTML();
    portNavigation();
    resetPortfolio();
}

$(portfolioRender);