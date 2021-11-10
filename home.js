document
  .querySelector("#search_button")
  .addEventListener("click", searchResult);

function searchResult() {
  searchValue = document.getElementById("search").value;
  searchValue == ""
    ? alert("please enter some text in search box")
    : alert("please provide path to mens page");
}

//sticky nav bar
window.onscroll = function () {
  fixedNavbar();
};

var navbar = document.getElementById("fixed_navbar");
var sticky = navbar.offsetTop;

function fixedNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// ===== Scroll to Top ====

document.querySelector("#return-to-top").addEventListener("click", scrollTop);

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// on click functions for dropdown content

// account button
document.querySelector("#account").addEventListener("click", show);

function show() {
  document.querySelector(".dropdown-content").classList.toggle("show");
}

//department button
document.querySelector("#shop").addEventListener("click", showDept);

function showDept() {
  document.querySelector(".dept_dropdown-content").classList.toggle("showDept");
}

//store button
document.querySelector("#store").addEventListener("click", showStore);

function showStore() {
  document
    .querySelector(".store_dropdown_content")
    .classList.toggle("showStoreDrp");
}

// on click functions for navbar account button

document.querySelector("#wallet").addEventListener("click", function () {
  window.location.href = "#wallet";
});

document.querySelector("#reward").addEventListener("click", function () {
  window.location.href = "#reward";
});

document.querySelector("#card").addEventListener("click", function () {
  window.location.href = "#card";
});

// redirect to sign in page
document
  .querySelector("#sign_in_button")
  .addEventListener("click", function () {
    // window.location.href = "./signin.html";
    alert("Please provide signin page path");
  });

// redirect to signup page

document
  .getElementById("create_account")
  .addEventListener("click", function () {
    alert("Please provide signup page path");
  });

// level of chill slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
setInterval(function () {
  var n = 1;
  plusSlides(n);
  n++;
}, 4000);

/* More for you slider_3 script*/
var moreSlideIndex = 1;
moreShowSlides(moreSlideIndex);

function morePlusSlides(n) {
  moreShowSlides((moreSlideIndex += n));
}
function moreShowSlides(n) {
  var slides = document.getElementsByClassName("moreMySlides");
  if (n == slides.length) {
    document.getElementById("more_rightarrow").style.display = "none";
  } else {
    document.getElementById("more_rightarrow").style.display = "block";
  }
  if (n == 1) {
    document.getElementById("more_leftarrow").style.display = "none";
  } else {
    document.getElementById("more_leftarrow").style.display = "block";
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[moreSlideIndex - 1].style.display = "block";
}

/* Recently viewed slider_4 script */
var recentlySlideIndex = 1;
recenltyShowSlides(recentlySlideIndex);

function recentlyPlusSlides(n) {
  recenltyShowSlides((recentlySlideIndex += n));
}

function recenltyShowSlides(n) {
  var slides = document.getElementsByClassName("recentlyMySlides");
  if (n > slides.length) {
    recentlySlideIndex = 1;
  }
  if (n < 1) {
    recentlySlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[recentlySlideIndex - 1].style.display = "block";
}
