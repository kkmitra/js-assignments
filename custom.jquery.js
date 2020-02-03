$(document).ready(function() {
  // Problem 1
  $("#problem_1_btn").click(function() {
    $(".section1 .height").animate({
      height: "300px"
    });
  });

  // Problem 2
  $("#problem_2_btn").click(function() {
    $(".section2 .height").animate({
      marginLeft: "300px"
    });
  });
});
