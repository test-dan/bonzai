var main = function() {
  $('#top-text').keyup(function(){
    var $memeTextTop = $(this).val();
    $('.top-caption').text($memeTextTop);
  });
  $('#bottom-text').keyup(function(){
    var $memeTextBottom = $(this).val();
    $('.bottom-caption').text($memeTextBottom);
  });
  $('#image-url').keyup(function(){
    var $newUrl = $(this).val();
    $('img').attr('src', $newUrl);
  });
};

$(document).ready(main);
