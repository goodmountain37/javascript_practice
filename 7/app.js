$(function(){
  $('.bg1').on('click', function(){
    $(this).slideUp();
  });
  
  $('.bg2').on('click', function(){
    $(this).slideUp();
  });

  $('.bg3').on('click', function(){
    $(this).slideUp();
  });

  $('.bg4').on('click', function(){
    $(this).slideUp();
  });

  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});