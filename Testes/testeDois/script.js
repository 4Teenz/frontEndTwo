const carrosselSlide = document.querySelector(".carrosselSlides");
const carrosselImage = document.querySelectorAll(".carrosselSlides img");
const prevBtn = document.querySelector(".carrosselPrev");
const nextBtn = document.querySelector(".carrosselNext");
let count = 0


function slideTo(index) {
    carrosselSlide.style.transform = `translateX(-${index * 50}vw)`;
  count = index;
}

prevBtn.addEventListener("click", () => {
  if (count === 0) {
    slideTo(carrosselImage.length - 1);
  } else {
    slideTo(count - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (count === carrosselImage.length - 1) {
    slideTo(0);
  } else {
    slideTo(count + 1);
  }
});
console.log();