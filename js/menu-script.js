const backToTop = document.getElementById("Home-navigation")
window.addEventListener("scroll",() => {
  if (window.scrollY > 700) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});