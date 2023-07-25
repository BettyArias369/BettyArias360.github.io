const slider = document.querySelector('.slider');
let count = 0;

function nextSlide() {
  count++;
  if (count >= slider.children.length) {
    count = 0;
  }
  updateSlide();
}

function prevSlide() {
  count--;
  if (count < 0) {
    count = slider.children.length - 1;
  }
  updateSlide();
}

function updateSlide() {
  slider.style.transform = `translateX(-${count * 100}%)`;
}

setInterval(nextSlide, 3000); // Cambiar la imagen cada 3 segundos