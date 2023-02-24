// ================ Open registrantion Modal Box ================
const body = document.querySelector("body");
const registrantionBtn = document.querySelector(".registrantion");
const regBackModal = document.querySelector(".registrantion__modalbox");
const regModalBox = document.querySelector(".registrantion__box");
registrantionBtn.addEventListener("click", () => {
    regBackModal.classList.add("reg-backmodal-open");
    regModalBox.classList.add("reg-modal-open");
    body.style.overflow = "hidden";
});

// Close registrantion Modal Box
const regModalCloseBtn = document.querySelector("#modal-close-btn");
regModalCloseBtn.addEventListener("click", () => {
    regBackModal.classList.remove("reg-backmodal-open");
    regModalBox.classList.remove("reg-modal-open");
    body.style.overflow = "auto";
});
// If click outside of modalBox
regBackModal.addEventListener("click", (e) => {
    if (!regModalBox.contains(e.target)) {
        regBackModal.classList.remove("reg-backmodal-open");
        regModalBox.classList.remove("reg-modal-open");
        body.style.overflow = "auto";
    }
});

// ================ Header Content - Text Animation ================
const textAnimate = document.querySelector(".Animated_text");
var transformCounter = 70;
setInterval(() => {
    if (transformCounter + 70 > 350) {
        transformCounter = 0;
    } else {
        textAnimate.style.transform = "translate(0,calc(-" + transformCounter + "px))";
        transformCounter += 70;
    }
}, 1000)

// ================ Header Carousel Services ================
const servicesNextbtn = document.querySelector(".header__services--next");
const servicesPrevbtn = document.querySelector(".header__services--prev");
const servicesCarousel = document.querySelector(".header__services ul");

servicesPrevbtn.addEventListener("click", () => {
    servicesCarousel.scrollBy(80, 0);
});
servicesNextbtn.addEventListener("click", () => {
    servicesCarousel.scrollBy(-80, 0);
});
