// Add a click event listener to the #bars checkbox
document.getElementById("bars").addEventListener("click", function () {
 // If the checkbox is checked, add the "checked" class to the navigation div
 if (this.checked) {
  document.querySelector(".navigation").classList.add("checked");
 } else {
  // Otherwise, remove the "checked" class from the navigation div
  document.querySelector(".navigation").classList.remove("checked");
 }
});

// Add a Click event listener to the document
document.addEventListener("click", function (event) {
 // If the hovered element is not the navigation and not the checkbox, remove the "checked" class
 if (!event.target.matches(".navigation") && !event.target.matches("#bars")) {
  document.querySelector(".navigation").classList.remove("checked");
  document.getElementById("bars").checked = false;
 }
});

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
 // On scroll, remove the "checked" class from the navigation div and uncheck the checkbox
 document.querySelector(".navigation").classList.remove("checked");
 document.getElementById("bars").checked = false;
});
// Get the element with the 'close-btn' class
var closeBtn = document.querySelector(".btn-close");

// Add a click event listener to the close button
closeBtn.addEventListener("click", function () {
 // On click, remove the "checked" class from the navigation div and uncheck the checkbox
 document.querySelector(".navigation").classList.remove("checked");
 document.getElementById("bars").checked = false;
});

const navbar = document.getElementById("navbar");
window.onscroll = function () {
 scrolllFunction();
};

function scrolllFunction() {
 if (document.body.scrollTop > 20 || document.body.scrollTop < 20) {
  navbar.classList.add("active");
 } else {
  navbar.classList.remove("active");
 }
}

const scrollRevealOption = {
 distance: "50px",
 origin: "bottom",
 duration: 1000,
};
const scrollRevealtransparent = {
 distance: "50px",
 opacity: 0.2,
 duration: 1000,
};

ScrollReveal().reveal(".header h2", scrollRevealOption);
ScrollReveal().reveal(".header h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header h3", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header .card-tags", {
 ...scrollRevealtransparent,
 delay: 1000,
});
ScrollReveal().reveal("section h1", scrollRevealOption);
ScrollReveal().reveal("section h2", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal("section .item", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal("section .row", { ...scrollRevealOption, delay: 2000 });
$(function () {
 $(".popup-modal").magnificPopup({
  type: "inline",
  preloader: false,
  focus: "#username",
  modal: true,
 });
 $(document).on("click", ".popup-modal-dismiss", function (e) {
  e.preventDefault();
  $.magnificPopup.close();
 });
});

$(".brand-carousel").owlCarousel({
 loop: true,
 margin: 10,
 navigator: true,
 autoplay: true,
 autoplayTimeout:3000, autoplaySpeed:3000,  autoplayHoverPause:true,
 dots: true,
 responsive: {
  0: {
   items: 1,
  },
  600: {
   items: 3,
  },
  1000: {
   items: 5,
  },
 },
});
$(".team-carousel").owlCarousel({
 loop: true,
 margin: 30,
 navigator: true,
 nav:true,
 autoplay: true,
 dots: true,
 responsive: {
   0: {
    centered: true,
   items: 1,
  },
  600: {
   items: 3,
  },
  1000: {
    centered: false,

   items: 4,
  },
 },
});
