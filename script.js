$(function() {
  // jQuery^Project logo 
  $('.lesson-hover').hover(
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください      
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
      
    }
  );
});

// ready^Project logo 
  