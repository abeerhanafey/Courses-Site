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


// making carousel slider on testimonial section

let slider = document.querySelector(".clientsParent");
let clients = document.querySelector(".clients");
let clientItem = document.querySelectorAll(".clients .client");
// let circle = document.querySelector(".opacityDiv");
let leftCarouselArrow = document.querySelector(".arrows .left");
let rightCarouselArrow = document.querySelector(".arrows .right");
let count = clientItem.length;
let leftTransform = 0;
let active = 1;
let itemWidth = clientItem[active].offsetWidth;

rightCarouselArrow.onclick = () => {
    active = active >= count - 1 ? count - 1 : active + 1;
    runCarousel();
}

leftCarouselArrow.onclick = () => {
    active = active <= 0 ? 0 : active - 1;
    runCarousel();
}

function runCarousel() {
    leftCarouselArrow.style.display = active == 0 ? "none" : "block";
    rightCarouselArrow.style.display = active == count - 1 ? "none" : "block";
    let oldActive = document.querySelector(".client.active");
    if (oldActive) {
        oldActive.classList.remove("active");
    }
    clientItem[active].classList.add("active");
    leftTransform = itemWidth * (active - 1) * -1;
    clients.style.transform = `translateX(${leftTransform}px)`;
}

runCarousel();
