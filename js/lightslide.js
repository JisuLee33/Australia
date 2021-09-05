//sub- .slide image left-animation slider 

$(function(){
  $('.prev').click(function(){
    $('.slider li:last').prependTo('.slider');
    $('.slider').css('margin-left',-410);
    $('.slider').stop().animate({marginLeft:0},800)
  });
  $('.next').click(function(){
    $('.slider').stop().animate({marginLeft:-410},800, function(){
      $('.slider li:first').appendTo('.slider');
      $('.slider').css({marginLeft:0});
    });
  });
});