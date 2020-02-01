window.addEventListener("load", function() {
    

    // Problem 1
    document.querySelector("#problem_1_btn").addEventListener("click", function() {
        document.querySelector(".section1 .height")
            .style.height = '300px'
    })

    // Problem 2
    document.querySelector("#problem_2_btn").addEventListener("click", function() {
        document.querySelector(".section2 .height")
            .style.marginLeft = '300px'
    })


})