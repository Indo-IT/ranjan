$(function() {
// jQuery^Project logo 
  $('.lesson-hover').hover(
    function() {
      // 「.text-contents」、text-active      
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
      
    }
  );
  
  // jQuery^ header manu navigation
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });
  
  // jQuery^ top-logo navigation
  $('.top-logo').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 300);
  });
  
    // jQuery^ certificate sliding
  
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    // 「3」の部分を、lengthメソッドを用いて書き換えてください
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }
  }
  
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });
  

  
});

