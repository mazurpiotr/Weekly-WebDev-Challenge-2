// - - -  NAVBAR - - -
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickNavbar()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("navbar-margin-top");
    navbar.classList.add("navbar-sticky");
  } else {
    navbar.classList.add("navbar-margin-top")
    navbar.classList.remove("navbar-sticky");
  }
}

// - - -  NAVBAR END - - -

// - - -  GALLERY - - -

const btn_gallery = document.querySelector(".btn-gallery")
const gallery = document.querySelectorAll(".gallery-wrapper .row .gallery-wrapper__img")

btn_gallery.addEventListener("click", () => {
  galleryViewMore();
  switchName(btn_gallery);
})

function galleryViewMore() {
  for (let index = 5; index < gallery.length; index++) {
    gallery[index].classList.toggle("hidden")
  }
}

function switchName(btn) {
  if (btn.getAttribute("data-text-swap") == btn.innerHTML) {
    btn.innerHTML = btn.getAttribute("data-text-original")
  } else {
    btn.setAttribute("data-text-original", btn.innerHTML)
    btn.innerHTML = btn.getAttribute("data-text-swap")
  }
}


// - - -  GALLERY END - - -

// - - -  BLOG - - -

const btn_blog = document.querySelector(".btn-blog")
const blogItems = document.querySelectorAll(".blog__gallery__item")

//Keep visible only 3 first elements
function hideBlogItems() {
  for (let i = 3; i < blogItems.length; i++) {
    blogItems[i].parentElement.classList.toggle("hidden")
  }
}

btn_blog.addEventListener("click", () => {
  switchName(btn_blog)
  hideBlogItems()
})

// - - -  BLOG END - - -

// - - - CONTACT - - -

// const btn_submit = document.querySelector(".btn-submit")
// btn_submit.addEventListener("click", (event) => {
//   event.preventDefault();
// })

// - - - CONTACT END - - -