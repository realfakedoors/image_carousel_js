let currentPhoto = 0;
const photos = document.querySelectorAll(".gallery-photo");

const showPhoto = (photo) => {
  const display = document.getElementById("current-image");
  display.innerHTML = photos[photo].innerHTML;
};

// Arrow Buttons

const prevPhoto = () => {
  currentPhoto <= 0 ? (currentPhoto = photos.length - 1) : currentPhoto--;
  showPhoto(currentPhoto);
};

const nextPhoto = () => {
  currentPhoto >= photos.length - 1 ? (currentPhoto = 0) : currentPhoto++;
  showPhoto(currentPhoto);
};

document.getElementById("button-prev").addEventListener("click", prevPhoto);
document.getElementById("button-next").addEventListener("click", nextPhoto);

// Photo Gallery

for (let i = 0; i < photos.length; i++) {
  photo = document.getElementById(`gallery-photo-${i}`);
  photo.addEventListener("click", function () {
    showPhoto(i);
  });
}

// Advance photos every 5 seconds

setInterval(() => {
  nextPhoto();
}, 5000);

document.addEventListener("DOMContentLoaded", showPhoto(currentPhoto));
