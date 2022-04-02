document
  .querySelector("#search_button")
  .addEventListener("click", searchResult);

function searchResult() {
  searchValue = document.getElementById("search").value;
  searchValue == ""
    ? alert("please enter some text in search box")
    : alert("please provide path to men's page");
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
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
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
document.querySelector("#img").addEventListener("mouseover", funct);

// document.getElementById("acont").addEventListener("mouseover", funct)
function funct() {
  // console.log("here")
  document.querySelector(".text99").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector(".text99").style.textDecoration = "underline";
}
document.querySelector("#img").addEventListener("mouseleave", functn);
function functn() {
  // console.log("hereO")
  document.querySelector(".text99").style.backgroundColor =
    "rgba(255,255,255,.5)";
  document.querySelector(".text99").style.textDecoration = "none";
}

document.querySelector("#img1").addEventListener("mouseover", funct1);
function funct1() {
  //    console.log("here")
  document.querySelector(".text999").style.backgroundColor =
    "rgba(255,255,255)";
  document.querySelector(".text999").style.textDecoration = "underline";
}

document.querySelector("#img1").addEventListener("mouseleave", functn1);
function functn1() {
  // console.log("hereO")
  document.querySelector(".text999").style.backgroundColor =
    "rgba(255,255,255,.5)";
  document.querySelector(".text999").style.textDecoration = "none";
}
document.querySelector("#img2").addEventListener("mouseover", funct2);
function funct2() {
  //    console.log("here")
  document.querySelector("#t1").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t1").style.textDecoration = "underline";
}

document.querySelector("#img2").addEventListener("mouseleave", functn2);
function functn2() {
  // console.log("hereO")
  document.querySelector("#t1").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t1").style.textDecoration = "none";
}
document.querySelector("#img3").addEventListener("mouseover", funct3);
function funct3() {
  //    console.log("here")
  document.querySelector("#t2").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t2").style.textDecoration = "underline";
}

document.querySelector("#img3").addEventListener("mouseleave", functn3);
function functn3() {
  // console.log("hereO")
  document.querySelector("#t2").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t2").style.textDecoration = "none";
}
document.querySelector("#img4").addEventListener("mouseover", funct4);
function funct4() {
  //    console.log("here")
  document.querySelector("#t3").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t3").style.textDecoration = "underline";
}

document.querySelector("#img4").addEventListener("mouseleave", functn4);
function functn4() {
  // console.log("hereO")
  document.querySelector("#t3").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t3").style.textDecoration = "none";
}
document.querySelector("#img5").addEventListener("mouseover", funct5);
function funct5() {
  //    console.log("here")
  document.querySelector("#t4").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t4").style.textDecoration = "underline";
}

document.querySelector("#img5").addEventListener("mouseleave", functn5);
function functn5() {
  // console.log("hereO")
  document.querySelector("#t4").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t4").style.textDecoration = "none";
}
document.querySelector("#img6").addEventListener("mouseover", funct6);
function funct6() {
  //    console.log("here")
  document.querySelector("#t5").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t5").style.textDecoration = "underline";
}

document.querySelector("#img6").addEventListener("mouseleave", functn6);
function functn6() {
  // console.log("hereO")
  document.querySelector("#t5").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t5").style.textDecoration = "none";
}
document.querySelector("#img7").addEventListener("mouseover", funct7);
function funct7() {
  //    console.log("here")
  document.querySelector("#t6").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t6").style.textDecoration = "underline";
}

document.querySelector("#img7").addEventListener("mouseleave", functn7);
function functn7() {
  // console.log("hereO")
  document.querySelector("#t6").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t6").style.textDecoration = "none";
}
document.querySelector("#img8").addEventListener("mouseover", funct8);
function funct8() {
  //    console.log("here")
  document.querySelector("#t7").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t7").style.textDecoration = "underline";
}

document.querySelector("#img8").addEventListener("mouseleave", functn8);
function functn8() {
  // console.log("hereO")
  document.querySelector("#t7").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t7").style.textDecoration = "none";
}
document.querySelector("#img9").addEventListener("mouseover", funct9);
function funct9() {
  //    console.log("here")
  document.querySelector("#t8").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t8").style.textDecoration = "underline";
}

document.querySelector("#img9").addEventListener("mouseleave", functn9);
function functn9() {
  // console.log("hereO")
  document.querySelector("#t8").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t8").style.textDecoration = "none";
}
document.querySelector("#img10").addEventListener("mouseover", funct10);
function funct10() {
  //    console.log("here")
  document.querySelector("#t9").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t9").style.textDecoration = "underline";
}

document.querySelector("#img10").addEventListener("mouseleave", functn10);
function functn10() {
  // console.log("hereO")
  document.querySelector("#t9").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t9").style.textDecoration = "none";
}
document.querySelector("#img11").addEventListener("mouseover", funct11);
function funct11() {
  //    console.log("here")
  document.querySelector("#t10").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t10").style.textDecoration = "underline";
}

document.querySelector("#img11").addEventListener("mouseleave", functn11);
function functn11() {
  // console.log("hereO")
  document.querySelector("#t10").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t10").style.textDecoration = "none";
}
document.querySelector("#img12").addEventListener("mouseover", funct12);
function funct12() {
  //    console.log("here")
  document.querySelector("#t11").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t11").style.textDecoration = "underline";
}

document.querySelector("#img12").addEventListener("mouseleave", functn12);
function functn12() {
  // console.log("hereO")
  document.querySelector("#t11").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t11").style.textDecoration = "none";
}
document.querySelector("#img13").addEventListener("mouseover", funct13);
function funct13() {
  //    console.log("here")
  document.querySelector("#t12").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t12").style.textDecoration = "underline";
}

document.querySelector("#img13").addEventListener("mouseleave", functn13);
function functn13() {
  // console.log("hereO")
  document.querySelector("#t12").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t12").style.textDecoration = "none";
}
document.querySelector("#img14").addEventListener("mouseover", funct14);
function funct14() {
  //    console.log("here")
  document.querySelector("#t13").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t13").style.textDecoration = "underline";
}

document.querySelector("#img14").addEventListener("mouseleave", functn14);
function functn14() {
  // console.log("hereO")
  document.querySelector("#t13").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t13").style.textDecoration = "none";
}
document.querySelector("#img15").addEventListener("mouseover", funct15);
function funct15() {
  //    console.log("here")
  document.querySelector("#t14").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t14").style.textDecoration = "underline";
}

document.querySelector("#img15").addEventListener("mouseleave", functn15);
function functn15() {
  // console.log("hereO")
  document.querySelector("#t14").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t14").style.textDecoration = "none";
}
document.querySelector("#img16").addEventListener("mouseover", funct16);
function funct16() {
  //    console.log("here")
  document.querySelector("#t15").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t15").style.textDecoration = "underline";
}

document.querySelector("#img16").addEventListener("mouseleave", functn16);
function functn16() {
  // console.log("hereO")
  document.querySelector("#t15").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t15").style.textDecoration = "none";
}
document.querySelector("#img17").addEventListener("mouseover", funct17);
function funct17() {
  //    console.log("here")
  document.querySelector("#t16").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t16").style.textDecoration = "underline";
}

document.querySelector("#img17").addEventListener("mouseleave", functn17);
function functn17() {
  // console.log("hereO")
  document.querySelector("#t16").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t16").style.textDecoration = "none";
}
document.querySelector("#img18").addEventListener("mouseover", funct18);
function funct18() {
  console.log("here");
  document.querySelector("#t17").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t17").style.textDecoration = "underline";
}

document.querySelector("#img18").addEventListener("mouseleave", functn18);
function functn18() {
  console.log("hereO");
  document.querySelector("#t17").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t17").style.textDecoration = "none";
}
document.querySelector("#img19").addEventListener("mouseover", funct19);
function funct19() {
  //    console.log("here")
  document.querySelector("#t18").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t18").style.textDecoration = "underline";
}

document.querySelector("#img19").addEventListener("mouseleave", functn19);
function functn19() {
  // console.log("hereO")
  document.querySelector("#t18").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t18").style.textDecoration = "none";
}
document.querySelector("#img20").addEventListener("mouseover", funct20);
function funct20() {
  //    console.log("here")
  document.querySelector("#t19").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t19").style.textDecoration = "underline";
}

document.querySelector("#img20").addEventListener("mouseleave", functn20);
function functn20() {
  // console.log("hereO")
  document.querySelector("#t19").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t19").style.textDecoration = "none";
}
document.querySelector("#img21").addEventListener("mouseover", funct21);
function funct21() {
  //    console.log("here")
  document.querySelector("#t20").style.backgroundColor = "rgba(255,255,255)";
  document.querySelector("#t20").style.textDecoration = "underline";
}

document.querySelector("#img21").addEventListener("mouseleave", functn21);
function functn21() {
  // console.log("hereO")
  document.querySelector("#t20").style.backgroundColor = "rgba(255,255,255,.5)";
  document.querySelector("#t20").style.textDecoration = "none";
}
var recentlySlideIndex = 1;
recenltyShowSlides(recentlySlideIndex);

function plusSlides(n) {
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

//showing username
var regUsers = JSON.parse(localStorage.getItem("userdata")) || [];
console.log(regUsers);

if (regUsers.length == 0) {
  document.querySelector("#user_name").textContent = "Account";
} else {
  var user_name = regUsers[0].firstname;
  document.querySelector("#user_name").innerHTML = `${user_name}`;
}
//redirecting to checkout
document.getElementById("go_check").addEventListener("click", function () {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || null;

  if (cartItems == null) {
    window.location.href = "empty.html";
  } else {
    window.location.href = "cart.html";
  }
});
//redirecting to cart
document.getElementById("go_cart").addEventListener("click", function () {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || null;

  if (cartItems == null) {
    window.location.href = "empty.html";
  } else {
    window.location.href = "cart.html";
  }
});

// Cart Quantity on header
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let cart_qty = document.getElementById("cart_qty");
if (cartItems.length !== 0) {
  cart_qty.innerHTML = `${cartItems.length}`;
}
