$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});
//$("")nth-child(3).addClass("sticky button");
$('.header').sticky();

$('.header').on('sticky-start', function(){
    $('.description').html('We build <strong>great</strong>apps');

});
$('.header').on('sticky-end', function(){
    $('.description').html('We build apps');

});

$('.work').sticky({
  topSpacing: 60
});
