var link = document.querySelector(".search-hotel-btn");
  var popup = document.querySelector(".booking-window");
  var form = document.querySelector("form");
var depdate = document.querySelector("[name=date-departure]");
  var arrdate = document.querySelector("[name=date-arrival]");
  var adults = document.querySelector("[name=adults]");
  var children = document.querySelector("[name=children]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("booking-window-show");
  });


  form.addEventListener("submit", function (evt) {
    if (!arrdate.value || !adults.value || !depdate.value || !children.value) {
      evt.preventDefault();
      popup.classList.add("input-error");
    } 
  });
