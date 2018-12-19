$(document).ready(function () {

  $('.navbar-nav .nav-item').click(function () {
    $('.navbar-nav .nav-item').removeClass('active');
    $(this).addClass('active');
  });

  $('.main-foot__nav-foot li').click(function () {
    $('.main-foot__nav-foot li').removeClass('active');
    $(this).addClass('active');
  });

  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });





});
