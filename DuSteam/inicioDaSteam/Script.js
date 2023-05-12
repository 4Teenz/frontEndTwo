const carrosselSlide = document.querySelector(".carrosselSlide1");
const carrosselImage = document.querySelectorAll(".carrosselSlide1 img");
const prevBtn = document.querySelector(".carrosselPrev");
const nextBtn = document.querySelector(".carrosselNext");
let currentIndex = 0;
let counter = 1;
const size = carrosselImage[0].clientWidth;


                  // BOTÃO

function slideTo(index) {
    carrosselSlide.style.transform = `translateX(-${index * 50}vw)`;
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

                // CARROSSEL AUTOMATICO

setInterval(() => {
  carrosselSlide.style.transition = 'transform 1s ease-in-out';
  carrosselSlide.style.transform = `translateX(${-size * currentIndex}px)`;
  currentIndex++;

  if(currentIndex === carrosselImage.length){
    currentIndex = 0;
  }
}, 4000)