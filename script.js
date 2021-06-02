var container = ($('#due').offset().top) / 2;

var due = ($('#due').offset().top) - container;

var tre = ($('#tre').offset().top) - container;

var quattro = ($('#quattro').offset().top) - container;

var cinque = ($('#cinque').offset().top) - container;

console.log(tre);


$(document).on('scroll', function() {


  if ($(window).scrollTop() < (due)) {

    $('#pallino-1').addClass('pallino-active');
    console.log("scroll");
  } else {
    $('#pallino-1').removeClass('pallino-active');
    console.log("no");
    console.log($(window).scrollTop());
  }

  if ($(window).scrollTop() > (due) && $(window).scrollTop() < (tre)) {

    $('#pallino-2').addClass('pallino-active');
    console.log("scroll");
  } else {
    $('#pallino-2').removeClass('pallino-active');
    console.log("no");
    console.log($(window).scrollTop());
  }


  if ($(window).scrollTop() > (tre) && $(window).scrollTop() < (quattro)) {

    $('#pallino-3').addClass('pallino-active');
    console.log("scroll");
  } else {
    $('#pallino-3').removeClass('pallino-active');
    console.log("no");
    console.log($(window).scrollTop());
  }

  if ($(window).scrollTop() > (quattro) && $(window).scrollTop() < (cinque)) {

    $('#pallino-4').addClass('pallino-active');
    console.log("scroll");
  } else {
    $('#pallino-4').removeClass('pallino-active');
    console.log("no");
    console.log($(window).scrollTop());
  }

  if ($(window).scrollTop() > (cinque)) {

    $('#pallino-5').addClass('pallino-active');
    console.log("scroll");
  } else {
    $('#pallino-5').removeClass('pallino-active');
    console.log("no");
    console.log($(window).scrollTop());
  }






});
