// nav bar
let list = document.querySelectorAll(".list ul li a");
list.forEach(function (el) {
    el.onclick = function () {
        list.forEach(function (el) {
            el.classList.remove("inPage");
        });
        el.classList.add("inPage");
    }
});

let drop = document.querySelector(".dropDown");
let page = document.querySelector(".list ul .page");

page.onclick = function () {
    if (drop.style.transform === "rotateX(0deg)") {
        drop.style.transform = "rotateX(90deg)";
    } else {
        drop.style.transform = "rotateX(0deg)";
    }
}

let leftArrow = document.querySelector(".back .arrows h3");
let rightArrow = document.querySelectorAll(".arrows h3")[1];
let goLift = document.querySelector(".back");
let goRight = document.querySelector(".front");

rightArrow.onclick = function () {
    goLift.style.transform = "rotateY(0deg)";
    goRight.style.transform = "rotateY(90deg)";
}
leftArrow.onclick = function () {
    goLift.style.transform = "rotateY(-90deg)";
    goRight.style.transform = "rotateY(0deg)";
}

let navBar = document.querySelector(".header label");
let navList = document.querySelector(".header .list");

navBar.onclick = function () {
    navList.classList.toggle("appearList");
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


if (window.scrollX == window.innerHeight) {
    console.log("abeer");
}

// topDownScroll
let scroller = document.querySelector(".topDownScroll");
scroller.onclick = function () {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, 300);
}

// visibility of the page by promise 
let header = document.querySelector(".header");
let cards = document.querySelector(".cards");
let about = document.querySelector(".about");
let categories = document.querySelector(".categories");
let courses = document.querySelector(".courses");
let instructors = document.querySelector(".instructors");
let testimonial = document.querySelector(".testimonial");
let footer = document.querySelector(".footer");

window.onload = function () {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            header.style.transform = "rotateX(0deg)";
            resolve();
        }, 300);
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                window.scrollBy(0, 650);
                cards.style.transform = "rotateX(0deg)";
            resolve();
        }, 300);
        } )
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                window.scrollBy(0, `${header.offsetHeight}`);
                about.style.transform = "rotateX(0deg)";
                resolve();
            }, 300);
        })
    }).then(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                window.scrollBy(0, `${about.offsetHeight}`);
                categories.style.transform = "rotateX(0deg)";
                resolve();
            }, 300);
        })
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                window.scrollBy(0, `${categories.offsetHeight}`);
                courses.style.transform = "rotateX(0deg)";
                resolve();
            }, 300);
        })
    }).then(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                window.scrollBy(0, `${courses.offsetHeight}`);
                instructors.style.transform = "rotateX(0deg)";
                resolve();
            }, 300);
        })
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                window.scrollBy(0, `${instructors.offsetHeight}`);
                testimonial.style.transform = "rotateX(0deg)";
                resolve();
            }, 300);
        })
    }).then(() => {
        setTimeout(() => {
            window.scrollBy(0, `${testimonial.offsetHeight}`);
            footer.style.transform = "rotateX(0deg)";
        }, 300);
    })
}

