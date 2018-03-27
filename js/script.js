var link = document.querySelector(".search-hotel-btn");
var popup = document.querySelector(".booking-window");
  
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("booking-window-show");
});
