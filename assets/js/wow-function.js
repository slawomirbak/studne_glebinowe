var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );

  var wow_counter = new WOW(
    {
      boxClass:     'wow_counter',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:function(box) {
        $(box).children().find('h3').each((index, element)=>{
          animateValueCounter($(element), 0, $(element).text())
        });
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
 

  function animateValueCounter($element, start, end, step)
  {
    step = (step == null) ? 20 : step;
    var timer = setInterval(function(){
      start += 2;
      if (start != parseInt(end) + 1){
        $element.text(start);
      } else {
        clearInterval(timer);
      }
    },step);
  }

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

if (!isMobileDevice()){
  wow.init();
  wow_counter.init();
}
