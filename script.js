var menuBtn = document.querySelector(".menu__btn");
var isScrollEnabled = true;

menuBtn.addEventListener("click", function () {
    if (isScrollEnabled) {
        document.body.style.overflow = "hidden";
        isScrollEnabled = false;
    } else {
        document.body.style.overflow = "";
        isScrollEnabled = true;
    }
});
