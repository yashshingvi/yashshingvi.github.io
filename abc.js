// $('.carousel').carousel({
//     interval: 4000
//   })
// setTimeout(function(){ $("body").addClass("loaded"); }, 500);
// setTimeout(function(){ $("#loader-wrapper").css("display", "None"); }, 2500);
//remove the top layer

//   $(".main").onepage_scroll();

  $(document).ready(function(){  
    $("#test").mouseover(function(){
    //   $("p").css("-webkit-animation", "fadein 2s");
    $(".fa").css("animation", "shake 0.5s");
    $("#test").mouseout(function(){
                $(".fa").css("animation", "none");
              });
    });     
});
 
$(document).ready(function(){  
    $(".ga").mouseover(function(){
    //   $("p").css("-webkit-animation", "fadein 2s");
    $(".sti").css("visibility", "hidden");
    $(".navbar").css("background-color", "black");
    $(".ga").mouseout(function(){
                $(".sti").css("visibility", "visible");
                $(".navbar").css("background-color", "whitesmoke");
              });
    });     
});
$('body').scrollspy({ data_offset: "20" })
var offset = 30;

$("#offad").click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});
$("#homee").click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});
$(document).ready(function(){  
    $("#hone").mouseover(function(){
    //   $("p").css("-webkit-animation", "fadein 2s");
    $("#smallicon1").css("visibility", "visible");
    $("#hone").mouseout(function(){
                $("#smallicon1").css("visibility", "hidden");
              });
    });     
});
$(document).ready(function(){  
    $("#htwo").mouseover(function(){
    //   $("p").css("-webkit-animation", "fadein 2s");
    $("#smallicon2").css("visibility", "visible");
    $("#htwo").mouseout(function(){
                $("#smallicon2").css("visibility", "hidden");
              });
    });     
});
$(document).ready(function(){  
    $("#hthree").mouseover(function(){
    //   $("p").css("-webkit-animation", "fadein 2s");
    $("#smallicon3").css("visibility", "visible");
    $("#hthree").mouseout(function(){
                $("#smallicon3").css("visibility", "hidden");
              });
    });     
});
$(document).ready(function(){  
    $("#hfour").mouseover(function(){
    //   $("p").css("-webkit-animation", "fadein 2s");
    $("#smallicon4").css("visibility", "visible");
    $("#hfour").mouseout(function(){
                $("#smallicon4").css("visibility", "hidden");
              });
    });     
});
$(document).ready(function(){  
    $("#hfive").mouseover(function(){
    //   $("p").css("-webkit-animation", "fadein 2s");
    $("#smallicon5").css("visibility", "visible");
    $("#hfive").mouseout(function(){
                $("#smallicon5").css("visibility", "hidden");
              });
    });     
});
// $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
//     data-offset = "20";
//     // $(".fa").css("animation", "shake 0.5s");
//   })
// $(document).ready(function(){
//     $("container").mouseover(function(){
//       $("container").css("background-color", "yellow");
//     });
//     $("p").mouseout(function(){
//         $("p").css("-webkit-animation", "fadein 10s");
//       });

// });

// $("image").hover(function(){
//     $("p").css("color", "yellow");
//     }, function(){
//     $("p").css("color", "pink");
//   });
// $().tooltip(function(){
//     data-Animation="false";
// })
document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 

  } else {
      $("body").addClass("loaded"); 
      $("body").css("background-color","#222222"); 
      setTimeout(function(){$(".sticky-top").css("-webkit-transform","translateX(0%)");$(".sticky-top").css("transform","translateX(0%)");$(".sticky-top").css("-ms-transform","translateX(0%)");$(".sticky-top").css("position","sticky");}, 3000);
      setTimeout(function(){$(".jumbotron").css("-webkit-transform","translateX(0%)");$(".jumbotron").css("transform","translateX(0%)");$(".jumbotron").css("-ms-transform","translateX(0%)");}, 3000);
      setTimeout(function(){$(".sl1").css("-webkit-transform","translateX(0%)");$(".sl1").css("-ms-transform","translateX(0%)");$(".sl1").css("transform","translateX(0%)");}, 2000);
      setTimeout(function(){ $("#loader-wrapper").css("display", "None"); }, 1000);
      setTimeout(function(){ $("#hii").css("display", "None"); }, 5000);
      // setTimeout(function(){$(".sticky-top").css("top","0");$(".sticky-top").css("left","100%"); $(".sticky-top").css("position","relative");}, 3000);
      // setTimeout(function(){ $(".sticky-top").css("-webkit-transform","translateX(0%)");$(".sticky-top").css("position","sticky");}, 100);
      // $(".sticky-top").css("position","sticky");
  } 
}; 