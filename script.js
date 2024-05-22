$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navber').addClass("sticky");
    }else{
      $('.navber').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });

  //slide-ip script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });




  // toggle menu/navber script
  $('.menu-btn').click(function(){
    $('.navber .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
  });




  //typing animation script
  var typed = new Typed(".typing",{
    strings: [ "Web Developer", "Shopify Expert", "Digital Marketer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true,
  });


  var typed = new Typed(".typing-2",{
    strings: [ "Web Developer", "Shopify Expert", "Digital Marketer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true,
  });



//owl-carousel script
$('.carousel').owlCarousel({

})
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1400,
    autoplayHoverPause:true,
    responsive: {
      0:{
        items: 1,
        nav: false,
      },
      600:{
        items: 2,
        nav: false,
      },
      1000:{
        items: 3,
        nav: false,
      }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})




