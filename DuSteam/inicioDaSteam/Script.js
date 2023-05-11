const carrosselSlide = document.querySelector(".carrosselSlide1");
const carrosselImage = document.querySelectorAll(".carrosselSlide1 img");
const prevBtn = document.querySelector(".carrosselPrev");
const nextBtn = document.querySelector(".carrosselNext");
let currentIndex = 0;

function slideTo(index) {
    carrosselSlide.style.transform = `translateX(-${index * 1000}px)`;
  currentIndex = index;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    slideTo(carrosselImage.length - 1);
  } else {
    slideTo(currentIndex - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === carrosselImage.length - 1) {
    slideTo(0);
  } else {
    slideTo(currentIndex + 1);
  }
});
