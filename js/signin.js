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

// // redirect to sign in page
// document
//   .querySelector("#sign_in_button")
//   .addEventListener("click", function () {
//     // window.location.href = "./signin.html";
//     alert("Please provide signin page path");
//   });

// redirect to signup page

document
  .getElementById("create_account")
  .addEventListener("click", function () {
    window.location.href = "signup.html";
  });
document.getElementById("showpsw").addEventListener("click", funct);
function funct() {
  var x = document.getElementById("pass");
  var y = document.getElementById("showpsw");
  if (x.type == "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
document.querySelector(".btn").addEventListener("click", signin);
var regdUsers = JSON.parse(localStorage.getItem("userdata")) || [];
function signin() {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#pass").value;
  if (email == "") {
    alert("Enter your registered email");
  } else {
    if (password == "") {
      alert("Enter your password");
    } else if (regdUsers.length == 0) {
      alert("Signup First");
    } else {
      var c = 0;
      var d = 0;
      var e = 0;
      var f = 0;
      for (i = 0; i < regdUsers.length; i++) {
        if (
          regdUsers[i].emailAddress == email &&
          regdUsers[i].password == password
        ) {
          c = 1;
          break;
          //    window.location.href="products.html"
        } else if (
          regdUsers[i].emailAddress != email &&
          regdUsers[i].password == password
        ) {
          d = 1;
          break;
        } else if (
          regdUsers[i].emailAddress == email &&
          regdUsers[i].password != password
        ) {
          e = 1;
          break;
        } else if (
          regdUsers[i].emailAddress != email &&
          regdUsers[i].password != password
        ) {
          //    window.location.href="e com.html"
          f = 1;
          break;
        }
      }
      if (c == 1) {
        alert("Successfully Logged In");
        window.location.href = "home.html";
      }
      if (d == 1) {
        alert("Entered Incorrect Email");
      }
      if (e == 1) {
        alert("Entered Incorrect Password");
      }
      if (f == 1) {
        alert("Signup First");
      }
    }
    //    }
  }
}
document.querySelector(".createacc").addEventListener("click", funcc);
function funcc() {
  window.location.href = "signup.html";
}

// showing username
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
