'use strict';

//this function renders the default portfolio view in mobile AND desktop. 
function portfolioRender() {
    loadIn();
    portNavigation();
    resetPortfolio();
}

//this function handles the animation of the landing page.
function loadIn() {
    $("document").ready(function() {
        $(".portfolio-landing").fadeIn(400);
    });
}

//this function shows other HTML sections when clicked on so that the user can navigate through the portfolio. 
function portNavigation() {
    $("#about-page").on("click", function(event) {
        $(".about-page").fadeIn(400)
        $(".portfolio-landing, .portfolio-page, .current-skillset, .contact-info").hide(); 
    });
    

    $("#portfolio").on("click", function(event) {
        $(".portfolio-page").fadeIn(400);
        $(".portfolio-landing, .about-page, .current-skillset, .contact-info").hide();
    });

    $("#skills").on("click", function(event){
         $(".current-skillset").fadeIn(400);
         $(".portfolio-landing, .about-page, .portfolio-page, .contact-info").hide(); 
    });

    $("#contact-page").on("click", function(event) {
        $(".contact-info").fadeIn(400);
        $(".portfolio-landing, .about-page, .portfolio-page, .current-skillset").hide();
    });
}

//this function resets the portfolio every time the user clicks "Home".
function resetPortfolio() {
    $("#home").on("click", function(event) {
        loadIn();
        $(".about-page, .portfolio-page, .current-skillset, .contact-info").hide();
    });
 }

$(portfolioRender);