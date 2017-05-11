  //导航栏和回到顶部******
define(['lib/jquery-3.2.1.min'],function(){

  var $navBar = $('.nav-bar');
  var $goTop = $('.go-top');
  $(window).on('scroll',function(){
    if($(window).scrollTop() > 500){
      $goTop.show();
      $navBar.css({
        'background': 'rgba(0,0,0,0.6)'
      })
    }else{
      $goTop.hide();
      $navBar.css('background', 'rgba(0,0,0,0)');
    }
  });
  $goTop.on('click',function(){
    $('html,body').animate({
      scrollTop: 0
    },1000)
  });

});