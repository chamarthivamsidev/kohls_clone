console.log("hello");
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
    window.location.href = "signin.html";
  });

document.querySelector("#ca").addEventListener("click", func);
var userArr = JSON.parse(localStorage.getItem("userdata")) || [];
function func() {
  var fname = document.getElementById("fname").value;
  var password = document.getElementById("pass").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var userCredincials = {
    emailAddress: email,
    password: password,
    firstname: fname,
    lastname: lname,
  };
  if (fname != "" && lname != "" && password != "") {
    if (validateemail() == false) {
      alert("Enter correct email");
    } else if (userArr.length != 0) {
      var userArr1 = JSON.parse(localStorage.getItem("userdata"));
      var flag = false;
      for (let i = 0; i < userArr1.length; i++) {
        if (userArr1[i].emailAddress == email) {
          flag = true;
        }
      }
      if (flag == true) {
        alert("This Email is already registered");
        window.location.href = "signin.html";
      } else {
        userArr.push(userCredincials);
        localStorage.setItem("userdata", JSON.stringify(userArr));
        alert("Account is successfully created");

        window.location.href = "signin.html";
      }
    } else {
      userArr.push(userCredincials);
      localStorage.setItem("userdata", JSON.stringify(userArr));
      alert("Account is successfully created");
      window.location.href = "signin.html";
    }
  } else {
    alert("Filling all the fields are mandatory");
  }
}

//show password
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

// refreshing the page
document.getElementById("cancel").addEventListener("click", fun);
function fun() {
  window.location.href = "signup.html";
}

//email validation
function validateemail() {
  var x = document.getElementById("email").value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    return false;
  }
}

// showing username
// var regUsers = JSON.parse(localStorage.getItem("userdata")) || [];
// console.log(regUsers);

// if (regUsers.length == 0) {
//   document.querySelector("#user_name").textContent = "Account";
// } else {
//   var user_name = regUsers[0].firstname;
//   document.querySelector("#user_name").innerHTML = `${user_name}`;
// }
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
