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