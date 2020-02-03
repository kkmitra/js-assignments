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

  // Problem 9
  $("#problem_9_btn").click(function() {
    //   const input_field =
    $(".section9 #test3")
      .val(`${$(".section9 #test3").val()} --disabled`)
      .prop("disabled", true);
    $(this).prop("disabled", true);
  });
});
