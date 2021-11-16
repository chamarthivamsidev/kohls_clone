//displaying data

var cartList = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartList);

if (cartList.length != 0) {
  document.getElementById("sc").innerHTML = `$8.95`;
  document.getElementById("tc").innerHTML = `$5.00`;
}

// total items & amount
var totalItems =
  JSON.parse(localStorage.getItem("totalItems")) || cartList.length;

var total = 0;
cartList.map(function (item, index) {
  var c = JSON.parse(localStorage.getItem(`counter${index}`)) || 1;
  var str = Math.floor(item.price);
  total = Math.floor(total + Number(str) * Number(c));
});

localStorage.setItem("total", JSON.stringify(total));
document.querySelector(
  "#items"
).innerHTML = `<p>Items (${totalItems})</p><p id="totalPrice">$${total}</p>`;

//Final Amount

var shippingPrice = Number(document.getElementById("sc").innerHTML.slice(1));
var taxPrice = Number(document.getElementById("tc").innerHTML.slice(1));

var finalPrice = total + shippingPrice + taxPrice;

localStorage.setItem("finalPrice", JSON.stringify(finalPrice));
document.getElementById("total").innerHTML = `<p>Total<p><p>$${finalPrice}</p>`;

//checkout button amount

document.getElementById(
  "checkout_amount"
).innerHTML = `CHECKOUT $${finalPrice}`;
document
  .getElementById("checkout_amount")
  .addEventListener("click", function () {
    // alert("Provide path to checkout page");
    window.location.href = "./payment.html";
  });

display(cartList);

// dynamic data taking from local storage

function display(cartList) {
  document.getElementById("cart-item-block").textContent = "";

  cartList.map(function (item, index) {
    var count = JSON.parse(localStorage.getItem(`counter${index}`)) || 1;

    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "mainDiv");

    //left div
    var left_div = document.createElement("div");
    left_div.setAttribute("class", "left_div");

    var a_img = document.createElement("a");
    a_img.setAttribute("href", "#");

    var img = document.createElement("img");
    img.setAttribute("src", item.img_prod);

    a_img.append(img);

    var type = document.createElement("h3");
    // type.textContent = item.type;
    type.textContent = "Regular";
    type.style.color = item.text_color;

    var price = document.createElement("p");
    price.innerHTML = `$${item.price}`;
    price.style.color = item.text_color;

    left_div.append(a_img, type, price);

    //right div
    var right_div = document.createElement("div");
    right_div.setAttribute("class", "right_div");

    var a_name = document.createElement("a");
    a_name.setAttribute("href", "#");
    a_name.setAttribute("id", "item_name");
    a_name.textContent = item.type;

    var size = document.createElement("p");
    size.setAttribute("id", "item_size");
    size.innerHTML = `Size: <span>${item.size}</span>`;

    var color = document.createElement("p");
    color.setAttribute("id", "item_color");
    color.innerHTML = `Color: <span>${item.color}</span>`;

    //deleteDiv
    var deleteDiv = document.createElement("div");
    deleteDiv.setAttribute("id", "save_for_later");

    var a_later = document.createElement("a");
    a_later.setAttribute("herf", "#");
    a_later.textContent = " Save for Later";
    a_later.setAttribute("id", "save_for_later_btn");

    var a_del_icon = document.createElement("a");
    a_del_icon.setAttribute("href", "#");
    a_del_icon.setAttribute("id", "delete_icon");

    a_del_icon.addEventListener("click", function () {
      deleteProduct(item, index);
    });

    var img_del = document.createElement("img");
    img_del.setAttribute(
      "src",
      "https://www.kohls.com/cnc/media/41.0.0-900/images/dgsImages/trash-icon.png"
    );

    a_del_icon.append(img_del);

    //count div

    var countDiv = document.createElement("div");
    countDiv.setAttribute("id", "counter_div");

    var btn1 = document.createElement("button");
    btn1.textContent = "-";
    btn1.setAttribute("class", "incre_decre_btn");
    btn1.setAttribute("id", "decre_btn");

    btn1.addEventListener("click", function () {
      if (count != 1) {
        // setting counter value
        count--;
        localStorage.setItem(`counter${index}`, JSON.stringify(count));
        countValue.innerText = JSON.parse(
          localStorage.getItem(`counter${index}`)
        );

        // setting total items & total amount
        totalItems--;
        total -= item.price;
        document.querySelector(
          "#items"
        ).innerHTML = `<p>Items (${totalItems})</p><p id="totalPrice">$${Math.floor(
          total
        )}</p>`;
        localStorage.setItem("totalItems", JSON.stringify(totalItems));
        localStorage.setItem("total", JSON.stringify(total));

        // setting final price
        finalPrice = total + shippingPrice + taxPrice;
        document.getElementById(
          "total"
        ).innerHTML = `<p>Total<p><p>$${finalPrice}</p>`;
        document.getElementById(
          "checkout_amount"
        ).innerHTML = `CHECKOUT $${finalPrice}`;
        localStorage.setItem("finalPrice", JSON.stringify(finalPrice));
      }
    });

    var countValue = document.createElement("p");
    countValue.setAttribute("class", "countValue");

    var btn2 = document.createElement("button");
    btn2.textContent = "+";
    btn2.setAttribute("class", "incre_decre_btn");

    btn2.addEventListener("click", function () {
      // setting counter value
      count++;
      localStorage.setItem(`counter${index}`, JSON.stringify(count));
      countValue.innerText = JSON.parse(
        localStorage.getItem(`counter${index}`)
      );

      // setting total items & total amount
      totalItems++;
      total += Number(item.price);
      document.querySelector(
        "#items"
      ).innerHTML = `<p>Items (${totalItems})</p><p id="totalPrice">$${total}</p>`;
      localStorage.setItem("totalItems", JSON.stringify(totalItems));
      localStorage.setItem("total", JSON.stringify(total));

      // setting final price
      finalPrice = Math.floor(total + shippingPrice + taxPrice);
      document.getElementById(
        "total"
      ).innerHTML = `<p>Total<p><p>$${finalPrice}</p>`;
      document.getElementById(
        "checkout_amount"
      ).innerHTML = `CHECKOUT $${finalPrice}`;
      localStorage.setItem("finalPrice", JSON.stringify(finalPrice));
    });

    countDiv.append(btn1, countValue, btn2);

    deleteDiv.append(a_later, a_del_icon, countDiv);

    //append
    right_div.append(a_name, size, color, deleteDiv);

    mainDiv.append(left_div, right_div);

    var container = document.getElementById("cart-item-block");
    container.append(mainDiv);
  });
}

function deleteProduct(item, index) {
  cartList.splice(index, 1);

  if (cartList.length != 0) {
    // total amount
    var t = JSON.parse(localStorage.getItem("total"));
    t = Math.floor(t - item.price);
    var ti = cartList.length;
    localStorage.setItem("total", JSON.stringify(t));
    localStorage.setItem("totalItems", JSON.stringify(ti));
    document.querySelector(
      "#items"
    ).innerHTML = `<p>Items (${ti})</p><p id="totalPrice">$${t}</p>`;

    //final price & checkout amount
    var fpb = JSON.parse(localStorage.getItem("finalPrice"));
    fpb = Math.floor(fpb - item.price);
    localStorage.setItem("finalPrice", JSON.stringify(fpb));
    document.getElementById("total").innerHTML = `<p>Total<p><p>$${fpb}</p>`;
    document.getElementById("checkout_amount").innerHTML = `CHECKOUT $${fpb}`;

    for (var i = 0; i < cartList.length; i++) {
      var c = JSON.parse(localStorage.getItem(`counter${i + 1}`));
      localStorage.setItem(`counter${i}`, c);
      console.log(c);
    }

    var cad = document.querySelectorAll(".countValue");
    for (var i = 0; i < cad.length; i++) {
      document.querySelectorAll(".countValue")[i].innerHTML =
        JSON.parse(localStorage.getItem(`counter${i}`)) || 1;
    }
  } else {
    localStorage.setItem("total", JSON.stringify("0"));
    localStorage.setItem("finalPrice", JSON.stringify("0"));
    document.querySelector(
      "#items"
    ).innerHTML = `<p>Items (0)</p><p id="totalPrice">$0</p>`;
    document.getElementById("sc").innerHTML = `$0.00`;
    document.getElementById("tc").innerHTML = `$0.00`;
    document.getElementById("total").innerHTML = `<p>Total<p><p>$0</p>`;
    document.getElementById("checkout_amount").innerHTML = `CHECKOUT $0`;
  }

  localStorage.setItem("cartItems", JSON.stringify(cartList));
  display(cartList);
}

//Redirect to home page

document.querySelector("#shop").addEventListener("click", function () {
  window.location.href = "home.html";
});

document.getElementById("kohls-logo").addEventListener("click", function () {
  window.location.href = "home.html";
});

document.getElementById("cs").addEventListener("click", function () {
  window.location.href = "home.html";
});

// ===== Scroll to Top ====

document.querySelector("#return-to-top").addEventListener("click", scrollTop);

function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

//window onload
window.addEventListener("load", function () {
  // if (cartList.length == 0) {
  //   window.location.href = "empty.html";
  // }
  var rmp = document.querySelectorAll(".countValue");

  for (var i = 0; i < rmp.length; i++) {
    document.querySelectorAll(".countValue")[i].innerHTML =
      JSON.parse(localStorage.getItem(`counter${i}`)) || 1;
  }
});
