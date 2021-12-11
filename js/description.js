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

//   product info page js

var product = JSON.parse(localStorage.getItem("MensProduct"));
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let cart_qty = document.getElementById("cart_qty");
if (cartItems.length !== 0) {
  cart_qty.innerHTML = `${cartItems.length}`;
}

display(product);

function display(product) {
  product.map(function (item) {
    var titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "titlename");
    var count = JSON.parse(localStorage.getItem("quantity")) || 1;
    //left part of product
    var left = document.querySelector(".left");
    titleDiv.textContent = item.type;
    var designer = document.createElement("h3");

    designer.innerHTML = `<span style="text-decoration:none">by</span>Sonoma Goods For Life`;
    var starDiv = document.createElement("div");
    starDiv.setAttribute("id", "star");

    var starImg = document.createElement("div");
    starImg.setAttribute("id", "starImg");
    starImg.innerHTML = `<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`;
    var rating = document.createElement("p");
    rating.textContent = "4.5";
    var stars = document.createElement("p");
    stars.textContent = item.stars;
    var review = document.createElement("p");
    review.textContent = "Write a review";
    var question = document.createElement("p");
    question.textContent = "Ask a Question";

    starDiv.append(starImg, rating, stars, review, question);

    titleDiv.append(designer, starDiv);

    var prodImg = document.createElement("div");
    prodImg.setAttribute("id", "prodImg");
    var prodImgLeft = document.createElement("div");
    prodImgLeft.setAttribute("id", "prodImgLeft");
    var poster1 = document.createElement("img");
    poster1.setAttribute("src", item.poster_1);

    poster1.addEventListener("mouseover", function () {
      productMain.setAttribute("src", item.poster_1);
    });

    var poster2 = document.createElement("img");
    poster2.setAttribute("src", item.poster_2);
    poster2.setAttribute("id", "poster2");

    poster2.addEventListener("mouseover", function () {
      productMain.setAttribute("src", item.poster_2);
    });
    var poster3 = document.createElement("img");
    poster3.setAttribute("src", item.poster_3);

    poster3.addEventListener("mouseover", function () {
      productMain.setAttribute("src", item.poster_3);
    });

    prodImgLeft.append(poster1, poster2, poster3);
    var prodImgRight = document.createElement("div");
    var productMain = document.createElement("img");
    productMain.setAttribute("src", item.poster_1);
    prodImgRight.setAttribute("id", "prodImgRight");
    prodImgRight.append(productMain);
    prodImg.append(prodImgLeft, prodImgRight);

    left.append(titleDiv, prodImg);

    //right part product
    var right = document.querySelector(".right");
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", mainDiv);
    var showPriceDiv = document.createElement("div");
    showPriceDiv.setAttribute("id", "showPriceDiv");
    var colorDiv = document.createElement("div");
    colorDiv.setAttribute("id", "colorDiv");

    var salePrice = document.createElement("h3");
    salePrice.setAttribute("id", "salePrice");
    salePrice.innerHTML = `$${item.sale} Sale `;

    var originalPrice = document.createElement("h3");
    originalPrice.setAttribute("id", "originalPrice");
    originalPrice.innerHTML = `$${item.price} Orig`;

    showPriceDiv.append(salePrice, originalPrice);

    var mainPrice = document.createElement("div");
    mainPrice.setAttribute("id", "mainPrice");

    var productPrice = document.createElement("h1");
    productPrice.setAttribute("id", "productPrice");
    productPrice.textContent = "$23.49";

    var when = document.createElement("p");
    when.setAttribute("id", "when");
    when.textContent = "when you use";

    mainPrice.append(productPrice, when);

    var shop = document.createElement("div");
    shop.setAttribute("id", "shopdis");
    shop.innerHTML = `<p style="color:#7e2c79">SHOP15</p><span style="padding-top:10px">(15% OFF) </span>
        <img src="https://media.kohlsimg.com/is/image/kohls/20200515-dt-price-story-info-icon?scl=1&fmt=png8&n">
        <p>at checkout</p>`;

    var border = document.createElement("div");
    border.setAttribute("id", "border");

    mainDiv.append(showPriceDiv, mainPrice, shop, border);

    var colorDesc = document.createElement("p");
    colorDesc.setAttribute("id", "colorDesc");
    colorDesc.innerHTML =
      '<span style="color:#666;text-decoration:none">COLOR:</span> <span style="text-decoration:none;color:#222;font-weight:bold">ORANGE NAVY PLAID</span>';
    var btnDiv = document.createElement("div");
    btnDiv.setAttribute("id", "btnDiv");

    var btn1 = document.createElement("img");
    btn1.setAttribute("src", item.btn1);
    var btn2 = document.createElement("img");
    btn2.setAttribute("src", item.btn2);
    var btn3 = document.createElement("img");
    btn3.setAttribute("src", item.btn3);
    var btn4 = document.createElement("img");
    btn4.setAttribute("src", item.btn4);
    btnDiv.append(btn1, btn2, btn3, btn4);

    var prodSize = document.createElement("p");
    prodSize.setAttribute("id", "prodSize");
    prodSize.innerHTML =
      '<span style="color:#666;text-decoration:none">SIZE:</span> <span style="color:#222;black;text-decoration:none">PLEASE CHOOSE A SIZE</span>';

    var sizeBtnDiv = document.createElement("div");
    sizeBtnDiv.setAttribute("id", "sizeBtnDiv");
    var sizeBtn1 = document.createElement("button");
    sizeBtn1.textContent = "S";
    sizeBtn1.addEventListener("click", function () {
      localStorage.setItem("size", JSON.stringify("S"));
      prodSize.innerHTML =
        '<span style="color:#666;text-decoration:none">SIZE:</span> <span style="color:#222;black;text-decoration:none;font-weight:bold">S</span>';
    });
    var sizeBtn2 = document.createElement("button");
    sizeBtn2.textContent = "M";
    sizeBtn2.addEventListener("click", function () {
      localStorage.setItem("size", JSON.stringify("M"));
      prodSize.innerHTML =
        '<span style="color:#666;text-decoration:none">SIZE:</span> <span style="color:#222;black;text-decoration:none;font-weight:bold">M</span>';
    });
    var sizeBtn3 = document.createElement("button");
    sizeBtn3.textContent = "L";

    sizeBtn3.addEventListener("click", function () {
      localStorage.setItem("size", JSON.stringify("L"));
      prodSize.innerHTML =
        '<span style="color:#666;text-decoration:none">SIZE:</span> <span style="color:#222;black;text-decoration:none;font-weight:bold">L</span>';
    });
    var sizeBtn4 = document.createElement("button");
    sizeBtn4.textContent = "XL";
    sizeBtn4.addEventListener("click", function () {
      localStorage.setItem("size", JSON.stringify("XL"));
      prodSize.innerHTML =
        '<span style="color:#666;text-decoration:none">SIZE:</span> <span style="color:#222;black;text-decoration:none;font-weight:bold">XL</span>';
    });
    var sizeBtn5 = document.createElement("button");
    sizeBtn5.textContent = "XXL";
    sizeBtn5.addEventListener("click", function () {
      localStorage.setItem("size", JSON.stringify("XXL"));
      prodSize.innerHTML =
        '<span style="color:#666;text-decoration:none">SIZE:</span> <span style="color:#222;black;text-decoration:none;font-weight:bold">XXL</span>';
    });

    var sizeBtn6 = document.createElement("button");
    sizeBtn6.textContent = "XXXL";
    sizeBtn6.addEventListener("click", function () {
      localStorage.setItem("size", JSON.stringify("XXXL"));
      prodSize.innerHTML =
        '<span style="color:#666;text-decoration:none">SIZE:</span> <span style="color:#222;black;text-decoration:none;font-weight:bold">XXXL</span>';
    });

    sizeBtnDiv.append(
      sizeBtn1,
      sizeBtn2,
      sizeBtn3,
      sizeBtn4,
      sizeBtn5,
      sizeBtn6
    );

    var sizeChart = document.createElement("p");
    sizeChart.setAttribute("id", "sizeChart");
    sizeChart.textContent = "Size Chart";

    var quanDiv = document.createElement("div");
    quanDiv.setAttribute("id", "quanDiv");
    var quantity = document.createElement("p");
    quantity.textContent = "QUANTITY";
    var inputQuantity = document.createElement("div");
    inputQuantity.setAttribute("id", "inputQuantity");

    var qbtn1 = document.createElement("button");

    qbtn1.setAttribute("class", "incdbtn");
    qbtn1.setAttribute("id", "decbtn");
    qbtn1.textContent = "-";
    qbtn1.addEventListener("click", function () {
      if (count !== 1) {
        count--;
      }
      localStorage.setItem("quantity", JSON.stringify(count));

      qcount.textContent = JSON.parse(localStorage.getItem("quantity"));
    });
    var qcount = document.createElement("p");
    qcount.innerHTML = `${count}`;
    var qbtn2 = document.createElement("button");
    qbtn2.setAttribute("class", "incdbtn");
    qbtn2.textContent = "+";
    qbtn2.addEventListener("click", function () {
      count++;

      localStorage.setItem("quantity", JSON.stringify(count));
      qcount.textContent = JSON.parse(localStorage.getItem("quantity"));
    });

    inputQuantity.append(qbtn1, qcount, qbtn2);
    quanDiv.append(quantity, inputQuantity);

    var addToCartBtn = document.createElement("div");
    addToCartBtn.setAttribute("id", "addToCartBtn");
    addToCartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> `;
    var addToCart = document.createElement("p");
    addToCart.textContent = "ADD TO CART";

    var addListDiv = document.createElement("div");
    addListDiv.setAttribute("id", "addListDiv");
    var addListImg = document.createElement("img");
    addListImg.setAttribute("src", "./images/desc_images/addlist.JPG");
    addListDiv.append(addListImg);

    addToCartBtn.addEventListener("click", function () {
      var size = JSON.parse(localStorage.getItem("size"));
      var quantity = JSON.parse(localStorage.getItem("quantity"));
      var color = "Navy Plaid";
      product[0].size = size;
      product[0].quantity = quantity;
      product[0].color = color;
      cartItems.push(product[0]);
      cart_qty.innerHTML = `${cartItems.length}`;
      localStorage.setItem("MensProduct", JSON.stringify(product));
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });

    addToCartBtn.append(addToCart);
    colorDiv.append(
      colorDesc,
      btnDiv,
      prodSize,
      sizeBtnDiv,
      sizeChart,
      quanDiv,
      addToCartBtn,
      addListDiv
    );
    right.append(mainDiv, colorDiv);
  });
}

// slider1
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

  if (cartItems == null || cartItems.length == 0) {
    window.location.href = "empty.html";
  } else {
    window.location.href = "cart.html";
  }
});
//redirecting to cart
document.getElementById("go_cart").addEventListener("click", function () {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || null;

  if (cartItems == null || cartItems.length == 0) {
    window.location.href = "empty.html";
  } else {
    window.location.href = "cart.html";
  }
});
