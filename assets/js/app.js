$("#arrow").click(function() {
  console.log("clicked");
  $('html,body').animate({
      scrollTop: $("#aboutMe").offset().top},
      'smooth');
});