$(document).ready(function(){
  $(".SlickCarousel").slick({
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:5000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:3, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:false,
    appendArrows:$(".Container .Head .Arrows"), // Class For Arrows Buttons
    prevArrow:'<span class="Slick-Prev"></span>',
    nextArrow:'<span class="Slick-Next"></span>',
    easing:"linear",
    responsive:[
      {breakpoint:801,settings:{
        slidesToShow:3,
      }},
      {breakpoint:767,settings:{
        slidesToShow:2,
      }},
      {breakpoint:600,settings:{
        slidesToShow:1,
      }},
    ],
  })
})