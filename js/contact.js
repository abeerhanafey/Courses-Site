let navBar = document.querySelector(".header label");
let navList = document.querySelector(".header .list");

navBar.onclick = function () {
    navList.classList.toggle("appearList");
}

let drop = document.querySelector(".dropDown");
let page = document.querySelector(".list ul .page");

page.onclick = function () {
    if (drop.style.transform === "rotateX(0deg)") {
        drop.style.transform = "rotateX(90deg)";
    } else {
        drop.style.transform = "rotateX(0deg)";
    }
}


// topDownScroll
let scroller = document.querySelector(".topDownScroll");
scroller.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

let inputField = document.querySelectorAll("input");

inputField.forEach(el => {
    el.onmouseenter = function () {
        inputField.forEach((ele) => {
            ele.style.outline = "none";
            ele.style.filter =  "none";
            ele.style.border =  "1px solid #888";
        })
        el.style.outline = "2px solid #02ABC2";
        el.style.filter =  "drop-shadow(0 0 5px #43E7FC)";
    }
});

