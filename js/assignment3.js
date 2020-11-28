var $body = $('body');
var $scene = $('.scene');
var $wand = $('.wand');
var $mushroom = $('.rabbit');


var rX=-13;

var wandrX = 65;
var wandrY = 0;


$body.on('mousedown', function() { $body.on('mousemove',rotateScene)});
$body.on('mouseup', function() { $body.off('mousemove',rotateScene)});


$('.object, .face, .instruction, .neon').prop('draggable', false);
function rotateScene(e) {

  rX -= e.originalEvent.movementX *2;

  if (rX > 6) rX = 6;
  if (rX < -25) rX = -25;

  $scene.css('transform', 'rotateX('+ rX + 'deg)');

  wandrX -= e.originalEvent.movementX;
  wandrY += e.originalEvent.movementY*2;
  if (wandrX < 50) wandrX = 50;
  if (wandrX > 80) wandrX = 80;
  if (wandrY < -111) wandrY = -111;
  if (wandrY > -66) wandrY = -66;

  $wand.css('transform', 'translate3d(180px,50px,170px) rotateX('+wandrX+'deg) rotateY('+wandrY+'deg)');
}

//audio
var audio = $("#track")[0];
$wand.mouseenter(function() {
audio.play();
$( '.rabbit' ).addClass( 'up' );
$('.sparkle').addClass('moving');

});
$wand.mouseleave(function(){
  $( '.rabbit' ).removeClass( 'up' );
  $('.sparkle').removeClass('moving');
});
