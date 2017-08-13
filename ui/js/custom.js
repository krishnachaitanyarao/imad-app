/**
 * Created by Nandu on 28/03/2017.
 */
$( document ).ready(function(){$(".button-collapse").sideNav();})
// smooth scrolling effect
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
//gmailmenu
// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();
//parallax
$(document).ready(function(){
    $('.parallax').parallax();
});
//colla[sible
$(document).ready(function(){
    $('.collapsible').collapsible();
});
//textarea
$('#textarea1').val('Idea Here');
$('#textarea1').trigger('autoresize');