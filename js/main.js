
$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement:'#trigger',
    /*duration: 500*/
  })
  
  .setClassToggle('#target', 'left')
  /*.addIndicators()*/
  .addTo(controller);

  $(".regular").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
  $('.single-item').slick();
});

window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var headercontainer = document.getElementById("header-container");
var logowhite = document.getElementById("logo-white");
var logoblue = document.getElementById("logo-blue");
var fix = header.offsetTop;
var prevScrollpos = window.pageYOffset;
function myFunction() {
  if (window.pageYOffset > 150) {
    headercontainer.classList.add("fix");
    headercontainer.classList.remove("standard");
    logowhite.classList.add("not");
    logoblue.classList.remove("not");
    header.classList.add("white");
  } else {
    headercontainer.classList.add("standard");
    headercontainer.classList.remove("fix");
    logowhite.classList.remove("not");
    logoblue.classList.add("not");
    header.classList.remove("white");
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.remove("invisible");
  } else {
    header.classList.add("invisible");
    }
    prevScrollpos = currentScrollPos;

    if ($(window).scrollTop() >= 90) {
      document.getElementById("title").classList.add("invisible");
    } else {
      document.getElementById("title").classList.remove("invisible");
    }


 
  }

