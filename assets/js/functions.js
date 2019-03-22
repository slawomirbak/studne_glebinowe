$('.anchor-element').click(function(e){
    e.preventDefault();
    var jumpId =$(this).find('a:first').attr('href')
    // leave 50 px from top
    $('body, html').animate({scrollTop: $(jumpId).offset().top-50}, 'slow');
});

$('.overlay-map').click(function(e){
    e.preventDefault();
    $(this).css("display","none");
});