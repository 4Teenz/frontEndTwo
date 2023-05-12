// const carrosselSlide = document.querySelector(".slide");
// const carrosselImage = document.querySelectorAll(".slide img");
// const prevBtn = document.querySelector(".carrosselPrev");
// const nextBtn = document.querySelector(".carrosselNext");
let count = 1
document.getElementById("radio1").checked = true

setInterval(function(){
    nexImage();
}   ,5000)
function nexImage(){
    count++
    if(count>10){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true

}

// function slideTo(index) {
//     carrosselSlide.style.transform = `translateX(-${index * 800}px)`;
//   counter = index;
// }

// prevBtn.addEventListener("click", () => {
//   if (count === 0) {
//     slideTo(carrosselImage.length - 1);
//   } else {
//     slideTo(count - 1);
//   }
// });

// nextBtn.addEventListener("click", () => {
//   if (count === carrosselImage.length - 1) {
//     slideTo(0);
//   } else {
//     slideTo(count + 1);
//   }
// });
