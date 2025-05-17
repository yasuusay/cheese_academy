// jsを記述する際はここに記載していく
$(".slide_items").slick({
    dots: true,
    arrows: false,
    autoplay:true,
    slidesToShow:2,
    infinite:true,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: '15%',
    responsive: [{
        breakpoint :768,
        settings:{
            arrows:false,
            autoplay:true,
            slidesToShow:1,
            infinite:true,
            slidesToScroll:1,
            centerMode: true
            }
        }]
  });

  $(function () {
    $('.js-hamburger').on('click', function () {
      $('.js-drawer').toggleClass('is-open');
    });
  });
  
  //ヘッダーの高さ分だけコンテンツを下げる
  $(function() {
    var height=$("#header").height();
    $("body").css("margin-top", height + 30);//10pxだけ余裕をもたせる
  });