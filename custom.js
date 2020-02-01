window.addEventListener("load", function () {


    // Problem 1
    document.querySelector("#problem_1_btn").addEventListener("click", function () {
        document.querySelector(".section1 .height")
            .style.height = '300px'
    })

    // Problem 2
    document.querySelector("#problem_2_btn").addEventListener("click", function () {
        document.querySelector(".section2 .height")
            .style.marginLeft = '300px'
    })


    // Problem 6
    document.querySelector("#problem_6_btn").addEventListener("click", function () {
        document.querySelectorAll(".section6 > p")
            .forEach(function (e) {
                if (e.classList.value === "") {
                    e.style.backgroundColor = "#fff";
                }
            })
    })


    // Problem 10
    document.querySelector("#problem_10_btn").addEventListener("click", function () {
        document.querySelector(".section1")
            .scrollIntoView({ behavior: "smooth" })
    })


    // Problem 4
    const tab_contents = document.querySelectorAll(".tabcontent .content")
    const tab_btns = document.querySelectorAll(".tabcontent button")
    tab_btns.forEach(function (btn_elm, i) {
        btn_elm.addEventListener("click", function () {
            tab_contents.forEach(function (content, j) {
                if(i === j) {
                    content.classList.add("active")
                } else {
                    content.classList.remove("active")
                }
            })
        })
    })




})