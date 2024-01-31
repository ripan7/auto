$(function () {
  
  var mixer = mixitup('.blog__list');
  
  $('.blog__filter-btn').on('click', function name(e) {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })
  

  $(".rateYo").rateYo({
    rating: 4.5,
    readOnly: true
  });
  
  $(".header__nav-list a, .header__top-btn, .footer__bottom a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })
  
  // $('.asked__prog-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('asked__prog-link--active')
  //   $(this).children('.asked__prog-text').slideToggle()
  // })
  

  $('.asked__prog-link').on('click', function(e){
    e.preventDefault()
    if ($(this).hasClass('asked__prog-link--active')) {
        $(this).removeClass('asked__prog-link--active')
        $(this).children('.asked__prog-text').slideUp()
        stopImmediatePropagation()
    }   
    $('.asked__prog-link').removeClass('asked__prog-link--active')
    $('.asked__prog-text').slideUp()
    $(this).toggleClass('asked__prog-link--active')
    $(this).children('.asked__prog-text').slideDown()
})

Fancybox.bind("[data-fancybox]", {
  // Your custom options
})

  $('.burger, .overlay, .header__top').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
})