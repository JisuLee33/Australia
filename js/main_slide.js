//slider
$(function(){

 
var i=0;
function slide(){
i++;
if (i > $('.slide li:last').index()){
  i=0;
}
$('.slide li').eq(i).stop().fadeIn(1000);
$('.slide li').eq(i-1).stop().fadeOut("slow");
}
setInterval(slide,3000);
});
//main
