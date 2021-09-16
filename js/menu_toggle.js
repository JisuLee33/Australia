$(function(){
//    $(".fa-bars").on("mouseover",function(){
//     $(".nav-list").stop().show();
//    }); 
//    $(".fa-bars").on("mouseout",function(){
//       $(".nav-list").stop().hide();
//      });
   // if (window.matchMedia("(max-width: 1024px)").matches) {
      // $(".nav-list").hide();
      $(".fa-bars").on("click",function(){
      $(".nav-list").stop().toggle();
      });
   // }
   
   // $(window).resize(function(){
   //    if(window.innerWidth>1024){
   //       $(".nav-list").show();
   //    } else { 
   //       $(".nav-list").hide();
   //    }
   // });
});
