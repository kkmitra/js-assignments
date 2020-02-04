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

    // Problem 9
    document.querySelector("#problem_9_btn").addEventListener("click", function () {
        const text =  document.querySelector("#test3").value
        document.querySelector("#test3").value = text + " --disabled"
        document.querySelector("#test3").disabled = true
        document.querySelector("#problem_9_btn").disabled = true
    })

    // Problem 7
    document.querySelector("#problem_7_btn").addEventListener("click", function () {
        const list_items = document.querySelectorAll(".section7 ul > li")
        list_items.forEach(function(elm) {
            if(elm.innerHTML > 3 && elm.innerHTML < 7) {
                elm.style.backgroundColor = "#ff0000"
            }

        })
    })

    // Problem 8
    document.querySelector("#problem_8_btn").addEventListener("click", function () {
        const list_items = document.querySelectorAll(".section8 ul > li")
        list_items.forEach(function(elm) {
            if(elm.innerHTML !== "1") {
                elm.style.borderColor = "#ff0000"
            }

        })
    })


    // Problem 5
    document.querySelector("#problem_5_btn").addEventListener("click", function () {
        const paras = document.querySelectorAll(".section5 p")
        document.querySelector(".section5").removeChild(paras[1])
        const newElm = document.createElement("div")
        newElm.appendChild(paras[1])
        document.querySelector(".section5").insertBefore(newElm, paras[2])
    })


    // Problem 3
    document.addEventListener("scroll", function() {
        const section3 = document.querySelector(".section3")
        if(document.documentElement.scrollTop > 700) {
            section3.style.position = "fixed";
            section3.style.left = 0;
            section3.style.right = 0;
            section3.style.top = 0;
        } 
        if(document.documentElement.scrollTop > 900 || document.documentElement.scrollTop < 700) {
            section3.style.position = "static"
        }
    })
})