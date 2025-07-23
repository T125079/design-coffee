window.addEventListener("scroll", () => {
    const bg1 = document.querySelector(".bg1-image");
    const bg2 = document.querySelector(".bg2-image");
    const scrollY = window.scrollY;

    if (scrollY < 2000) {
        bg1.classList.add("bg-visible");
        bg2.classList.remove("bg-visible");
    } else {
        bg1.classList.remove("bg-visible");
        bg2.classList.add("bg-visible");
    }
});