$(function(){

  if ($(this).width() > 480) {
  // call supersize method
    $(".type").typed({
      strings: ["a user experience", "a visual", "an industrial"],
      typeSpeed: 100,
      loop: true,
      startDelay: 1000,
      // backspacing speed
      backSpeed: 100,
      // time before backspacing
      backDelay: 3000,
    });
  }

});
