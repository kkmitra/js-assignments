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

  // Problem 8
  $("#problem_8_btn").click(function() {
    $(".section8 li")
      .not(":eq(0)")
      .css("border-color", "#ff0000");
  });

  // Problem 7
  $("#problem_7_btn").click(function() {
    $($(".section7").find("li:eq(2)")[0])
      .nextUntil("li:eq(6)")
      .css("background-color", "#ff0000");
  });

  // Problem 6
  $("#problem_6_btn").click(function() {
    $(".section6")
      .find("p")
      .each(function() {
        if(!$(this).attr('class')) {
          $(this).css("background-color", "#fff");
        }
      })
  });
});
