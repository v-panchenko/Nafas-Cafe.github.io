const backToTop = document.getElementById("Home-navigation")
window.addEventListener("scroll",() => {
  if (window.scrollY > 700) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const images = document.querySelectorAll(".food-img");
  const close = document.querySelector(".close");

  images.forEach(img => {
    img.onclick = () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    };
  });

  close.onclick = () => {
    modal.style.display = "none";
  };