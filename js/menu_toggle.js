$(function(){
   $(".fa-bars").on("mouseover",function(){
    $(".nav-list").show();
   }); 
   $(".fa-bars").on("mouseout",function(){
      $(".nav-list").hide();
     });
   // if (window.matchMedia("(max-width: 1024px)").matches) {
   //    $(".nav-list").hide();
   //    $(".fa-bars").hover(function(){
   //    $(".nav-list").stop().toggle();
   //    });
   // }
   
   // $(window).resize(function(){
   //    if(window.innerWidth>1024){
   //       $(".nav-list").show();
   //    } else { 
   //       $(".nav-list").hide();
   //    }
   // });
});
