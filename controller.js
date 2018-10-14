$(document).ready(function () {

/*Scroll para as divs!*/
    $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: $(".area1").offset().top-50
    }, 1000)
  }), 
    $('.link2').click(function (){
      $('html, body').animate({
        scrollTop: $(".eixos").offset().top-50
      }, 1000)
    }),
    $('.link3').click(function (){
      $('html, body').animate({
        scrollTop: $(".area2").offset().top-50
      }, 1000)
    })
    $('.link4').click(function (){
        $('html, body').animate({
          scrollTop: $(".area3").offset().top-50
        }, 1000)
    })
    $('.home').click(function (){
      $('html, body').animate({
          scrollTop: $("div.main").offset().top-50
      }, 1000)
      })

/*Collapse para o menu hamburguer quando clicar fora*/
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').removeClass('show');
    });
});