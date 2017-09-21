var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination'
  , paginationClickable: true
  , direction: 'vertical'
});




var swiperStartHandler = function (swiper) {
  document.querySelectorAll('.point-down').forEach(function(elem){
    elem.style.display = 'none';
  })
};

var swiperEndHandler = function (swiper) {
  document.querySelectorAll('.point-down').forEach(function(elem){
    elem.style.display = '';
  })
};

swiper.on('touchStart', swiperStartHandler);
swiper.on('slideChangeStart', swiperStartHandler);

swiper.on('slideChangeEnd', swiperEndHandler);
swiper.on('touchEnd', swiperEndHandler);



var swiper2 = new Swiper('.swiper-container2', {
  pagination: '.swiper-pagination2',
  paginationClickable: true,
  initialSlide: 2
});



//range
var rangeVal = document.querySelector('#rangeOne');
rangeVal.oninput = function(){
  var length = swiper2.slides.length-1;
  swiper2.slideTo(Math.round(this.value*length/this.max));

};

swiper2.on('slideChangeEnd',function(swiper){
  rangeVal.value = swiper.activeIndex*50;
});

//---


