let x = document.getElementById("viewDigitalReceipt");

document.getElementById("showCard").style.display == "none";
document.getElementById("showAdd").style.display == "none";

function hide() {
  document.getElementById("viewDigitalReceipt").style.display = "none";
  document.getElementById("show").style.display = "none";
}

function hideshow() {
  if (document.getElementById("viewDigitalReceipt").style.display == "none") {
    document.getElementById("viewDigitalReceipt").style.display = "block";
  } else {
    document.getElementById("viewDigitalReceipt").style.display = "none";
  }

  if (document.getElementById("show").textContent == "View Order Summary") {
    document.getElementById("show").textContent = "Hide Order Summary";
  } else {
    document.getElementById("show").textContent = "View Order Summary";
  }
}

function hideshowAdd() {
  if (document.getElementById("showAdd").style.display == "none") {
    document.getElementById("showAdd").style.display = "block";
  } else {
    document.getElementById("showAdd").style.display = "none";
  }
}

function hideshowCard() {
  if (document.getElementById("showCard").style.display == "none") {
    document.getElementById("showCard").style.display = "block";
  } else {
    document.getElementById("showCard").style.display = "none";
  }
}

var cartItems = JSON.parse(localStorage.getItem("cartItems"));

display(cartItems);

function display(cartItems) {
  document.querySelector(".container").textContent = "";

  cartItems.map(function (item, index) {
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "cart_item_div");

    var des_div = document.createElement("div");
    des_div.setAttribute("id", "des_div");

    var des_left_div = document.createElement("div");
    des_left_div.setAttribute("id", "des_left_div");

    var img = document.createElement("img");
    img.setAttribute("src", item.img_prod);
    img.setAttribute("id", "item_image");

    var image_name = document.createElement("div");
    image_name.setAttribute("id", "image_name");
    var quantity = JSON.parse(localStorage.getItem(`counter${index}`));

    if (item.sale != undefined) {
      image_name.innerHTML = `<p>Regular(${quantity})<br>Sale</p>`;
    } else {
      image_name.innerHTML = `<p>${item.type}(${quantity})</p>`;
    }

    des_left_div.append(img, image_name);

    var des_right_div = document.createElement("div");
    des_right_div.setAttribute("id", "des_right_div");

    if (item.sale != undefined) {
      var regularPrice = document.createElement("div");
      var rp = Math.floor(Number(item.price) * quantity);
      regularPrice.innerHTML = `$${rp}`;
      var salePrice = document.createElement("div");
      var sp = Math.floor(Number(item.sale) * quantity);
      salePrice.innerHTML = `$${sp}`;

      des_right_div.append(regularPrice, salePrice);
    } else {
      var regularPrice = document.createElement("div");
      var rp = Math.floor(Number(item.price) * quantity);
      regularPrice.innerHTML = `$${rp}`;
      des_right_div.append(regularPrice);
    }

    var regularPrice = document.createElement("div");
    regularPrice.innerHTML = `$${item.regular}`;

    des_div.append(des_left_div, des_right_div);

    var total_div = document.createElement("div");
    total_div.setAttribute("id", "total_div");

    if (item.sale != undefined) {
      var fp = Math.floor(Number(item.sale) * quantity);
    } else {
      var fp = Math.floor(Number(item.price) * quantity);
    }

    total_div.innerHTML = `$${fp}`;

    var id_div = document.createElement("div");
    id_div.setAttribute("id", "serial_div");

    // random id generator
    var min = 40000000;
    var max = 80000000;
    var rid = getRandomArbitrary(min, max);

    id_div.innerHTML = `<p>SKU #${rid}</p>`;

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    mainDiv.append(des_div, total_div, id_div);

    var container = document.querySelector(".container");
    container.append(mainDiv);

    //small image
    var s_image_div = document.querySelector("#s_img");

    var s_img = document.createElement("img");
    s_img.setAttribute("src", item.img_prod);

    s_image_div.append(s_img);
  });
}

// final price
var finalPrice = JSON.parse(localStorage.getItem("finalPrice"));
document.querySelector(".check-bttn").innerHTML = `PLACE OREDR $${finalPrice}`;

//items
var totalItems = JSON.parse(localStorage.getItem("totalItems"));
var totalPrice = JSON.parse(localStorage.getItem("total"));
document.querySelector(
  "#items"
).innerHTML = `Items(${totalItems})<span>$${totalPrice}</span>`;

//total price
var total = Math.floor(JSON.parse(localStorage.getItem("finalPrice")));
document.querySelector("#total").innerHTML = `Total<span>$${total}</span>`;

// user credentials
var userCred = JSON.parse(localStorage.getItem("userdata"));

show(userCred);
function show(userCred) {
  var name = userCred[0].firstname;
  var email = userCred[0].emailAddress;
  document.querySelector(".signed-in-name").innerHTML = `${name}`;
  document.querySelector(".signed-in-email").innerHTML = `${email}`;
}

//return to cart
document
  .getElementById("return_to_cart_page")
  .addEventListener("click", function () {
    window.location.href = "./cart.html";
  });

//address  validation
document.querySelector(".add_btn_done").addEventListener("click", function () {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var state = document.getElementById("state").value;
  var phone = document.getElementById("phone").value;
  var zip = document.getElementById("zip").value;
  var aptname = document.getElementById("aptname").value;
  var sname = document.getElementById("sname").value;

  console.log(fname, lname, state, phone, zip, aptname, sname);

  if (
    fname != "" &&
    lname != "" &&
    sname != "" &&
    state != "" &&
    zip != "" &&
    aptname != "" &&
    phone != ""
  ) {
    alert("address added sucessfully");
  } else {
    alert("all fields in address form is mandatory");
  }
});

//card validation
document.querySelector("#addCard").addEventListener("click", function () {
  var cnumber = document.getElementById("cnumber").value;
  var cvv = document.getElementById("cvv").value;
  var expiry = document.getElementById("expiry").value;
  var cname = document.getElementById("cname").value;

  if (cname != "" && cnumber != "" && expiry != "" && cvv != "") {
    alert("address added sucessfully");
  } else {
    alert("card added sucessfully");
  }
});

document.querySelector(".check-bttn").addEventListener("click", function () {
  window.location.href = "sucess.html";
});
