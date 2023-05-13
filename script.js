const showBtn = document.querySelector(".menu__btn");
const closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () =>
    setTimeout(function () {
        closeBtn.style.opacity = "1";
    }, 250)
);

closeBtn.addEventListener("click",()=>{
  closeBtn.style.opacity = "0";
})