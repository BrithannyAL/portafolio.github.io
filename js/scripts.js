let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const heroSectionHeight = document.getElementById("inicio").offsetHeight;
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > heroSectionHeight) {
    mybutton.classList.add("show");
    mybutton.classList.remove("hide");
  } else {
    mybutton.classList.add("hide");
    mybutton.classList.remove("show");
  }
}

mybutton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};