// tootip script 
// $(document).ready(function(){
//   $('[data-toggle="tooltip"]').tooltip();
// })


 $(document).ready(function () {
    
  $("#mycarousel").carousel({
    interval: 2000,
    // pause: "false",
    // cycle: "true"
  });
  // // this section is for play pause button group control
  // $('#carousel-pause').click(function(){
  //   $('#mycarousel').carousel('pause');
  // });
  // $('#carousel-play').click(function(){
  //   $('#mycarousel').carousel('cycle');
  // });
});
// this section is for single buttom play pause
$("#carouselButtons").click(function () {
  if ($("#carouselButtons").children("span").hasClass("fa-pause")) {
    $("#mycarousel").carousel("pause");
    $("#carouselButtons").children("span").removeClass("fa-pause");
    $("#carouselButtons").children("span").addClass("fa-play");
  } else if ($("#carouselButtons").children("span").hasClass("fa-play")) {
    $("#mycarousel").carousel("cycle");
    $("#carouselButtons").children("span").removeClass("fa-play");
    $("#carouselButtons").children("span").addClass("fa-pause");
  }
});
$("#btn-loginModal").click(function(){
  $("#loginModal").modal('toggle');
  $(".close").click(function(){
    $('#loginModal').modal('hide')
  });
  
});

$("#btn-reserveModal").click(function(){
  $("#reserveModal").modal('toggle');
  $(".close").click(function(){
    $('#reserveModal').modal('hide')
  });
});

