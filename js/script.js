const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const burgerIcon = header.querySelector(".burger-menu__icon");

burger.addEventListener("click", function() {
  header.classList.toggle("header--mobile");

  if (header.classList.contains("header--mobile")) {
    burgerIcon.src = "assets/icons/burger-menu-close.svg"
  } else {
    burgerIcon.src = "assets/icons/burger-menu.svg"
  }
})

const backToTop = document.getElementById("Home-navigation")
window.addEventListener("scroll",() => {
  if (window.scrollY > 700) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});


  const slider = document.getElementById('atmSlider');
  const next = document.querySelector('.atm-next');
  const prev = document.querySelector('.atm-prev');

  const slideWidth = slider.querySelector('.atm-item').offsetWidth + 16;

  next.addEventListener('click', () => {
    slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
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