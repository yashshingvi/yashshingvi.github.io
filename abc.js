// $('.carousel').carousel({
//     interval: 4000
//   })
// setTimeout(function(){ $("body").addClass("loaded"); }, 500);
// setTimeout(function(){ $("#loader-wrapper").css("display", "None"); }, 2500);
//remove the top layer
// setTimeout(function(){$(document).getElementsByTagName("#curve2")[0].setAttribute("transform", "rotate(50,500,0)");},10);
//   $(".main").onepage_scroll();
var b = document.querySelector("text"); 
// window.onscroll = function() {myFunction()};

// myFunction(){
//  b.setAttribute("transform", "rotate(80,500,0)"); 
// }
$('window').on('touchmove', function(event) {

  event.preventDefault(); 

  var distanceY = window.scrollY
  if (distanceY > 0) {
    if(distanceY>=530 && distanceY <960){
      $("#foo").css("transform", `rotate(${530/7}deg)`);
  }
  else if(distanceY>=1952) {
    //   do nothing
    }
  else{
  $("#foo").css("transform", `rotate(${distanceY/7}deg)`);
  }

  }
});

window.onscroll = function() {myFunction()};
// console.log(document.documentElement.scrollTop);
function myFunction() {
  // if(document.documentElement.scrollTop>=0 && document.documentElement.scrollTop <532){
  //   $("#foo").css("transform", `rotate(${document.documentElement.scrollTop/7}deg)`);
  // }
  // else if(document.documentElement.scrollTop>960 && document.documentElement.scrollTop <1400){
  //   $("#foo").css("transform", `rotate(${document.documentElement.scrollTop/7}deg)`);
  // }
    if(document.documentElement.scrollTop>=530 && document.documentElement.scrollTop <960){
      $("#foo").css("transform", `rotate(${530/7}deg)`);
  }
  else if(document.documentElement.scrollTop>=1952) {
    //   do nothing
    }
  else{
  $("#foo").css("transform", `rotate(${document.documentElement.scrollTop/7}deg)`);
  }


    // $("text").css("transform", "rotate( ${document.documentElement.scrollTop} deg)");
    // console.log("Calling this function");
    // console.log(document.documentElement.scrollTop);
    // console.log("'"${document.body.scrollTop}"'");
}



// window.onscroll = function() {myFunction()};

// function myFunction() {
  
//     // b.setAttribute("transform", `rotate('${window.onscroll}')`);
//     // $("text").css("transform", `rotate('${document.body.scrollTop}'deg)`);
//     $("text").css("transform", "rotate(90deg)");
  
// }



// Get the offset position of the navbar
// var navbar = document.getElementById("navbar");
// var home1 = $("#content").offsetTop;
// var home2 = $("#hom").offsetTop;
// var home3 = $(".ga").offsetTop;
// var home4 = $("#ipadpad").offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
// function myFunction() {
//   console.log(home1);
//   if (window.pageYOffset  >= 0) {
//     $("#foo").css("transform", "rotate(0deg)");
//   } else if(window.pageYOffset  >= home2){
//     $("#foo").css("transform", "rotate(90deg)");
    
//   }
//   else if(window.pageYOffset  >= home3){
//     $("#foo").css("transform", "rotate(180deg)");
  
//   }
//   else if(window.pageYOffset  >= home4){
//     $("#foo").css("transform", "rotate(270deg)");
    
//   }
// }


// window.addEvent('scroll',function(e) {
//   //do stuff
//   b.setAttribute("transform", "rotate(100,500,0)"); 
// });
// function scrollFunction() {
//   // do your stuff here;
//   b.setAttribute("transform", "rotate(100,500,0)"); 
// }
// window.onscroll = scrollFunction;

// $(".navbar-brand").css("color", "pink");
// $(document).ready(function() {
//   $(window).scroll(function() {
//     // do whatever you need here.
//     // $(".navbar-brand").css("color", "pink");
//     $("text").css("transform", "rotate(90deg)");
//     // b.setAttribute("transform", "rotate(10deg)"); 
//   });
// });
// $("text").css("transform", "rotate(90deg)");



// window.onload = function()
// {
//    window.onscroll = function()
//    {
//       console.log("Calling this function");
//       $("text").css("transform", `rotate('${document.body.scrollTop}'deg)`);
//    }
// }




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
      setTimeout(function(){$("#stickytop").css("-webkit-transform","translateX(0%)");$("#stickytop").css("transform","translateX(0%)");$("#stickytop").css("-ms-transform","translateX(0%)");$("#stickytop").css("position","sticky");}, 3000);
      setTimeout(function(){$(".jumbotron").css("-webkit-transform","translateX(0%)");$(".jumbotron").css("transform","translateX(0%)");$(".jumbotron").css("-ms-transform","translateX(0%)");}, 3000);
      setTimeout(function(){$(".sl1").css("-webkit-transform","translateX(0%)");$(".sl1").css("-ms-transform","translateX(0%)");$(".sl1").css("transform","translateX(0%)");}, 2000);
      setTimeout(function(){$("#svg1").css("-webkit-transform","translateX(0%)");$("#svg1").css("transform","translateX(0%)");$("#svg1").css("-ms-transform","translateX(0%)");$("#svg1").css("position","fixed");}, 3000);
      setTimeout(function(){ $("#loader-wrapper").css("display", "None"); }, 1000);
      setTimeout(function(){ $("#hii").css("display", "None"); }, 2500);
      // setTimeout(function(){$(".sticky-top").css("top","0");$(".sticky-top").css("left","100%"); $(".sticky-top").css("position","relative");}, 3000);
      // setTimeout(function(){ $(".sticky-top").css("-webkit-transform","translateX(0%)");$(".sticky-top").css("position","sticky");}, 100);
      // $(".sticky-top").css("position","sticky");
  } 
}; 
