var account = document.getElementById("account");
account.addEventListener("click", myFunction);

function myFunction() {
  var dropdown_div = document.createElement("div");
  dropdown_div.setAttribute("id", "drp_div");

  var body = document.querySelector("body");
  body.append(dropdown_div);

  console.log("hi");
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
