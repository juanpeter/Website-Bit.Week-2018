$(document).ready(function () {
    $('div.link1').click(function() {
    $('html, body').animate({
      scrollTop: $("div.area1").offset().top
    }, 1000)
  }), 
    $('div.link2').click(function (){
      $('html, body').animate({
        scrollTop: $("div.area2").offset().top
      }, 1000)
    }),
    $('div.link3').click(function (){
      $('html, body').animate({
        scrollTop: $("div.area3").offset().top
      }, 1000)
    })
    $('div.link4').click(function (){
        $('html, body').animate({
          scrollTop: $("div.area4").offset().top
        }, 1000)
    })
    $('i.seta').click(function (){
    $('html, body').animate({
        scrollTop: $("div.menu-top").offset().top
    }, 1000)
    })
    $('.home').click(function (){
      $('html, body').animate({
          scrollTop: $("div.menu-top").offset().top
      }, 1000)
      })
  });