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

// product page
var products = [
  {
    // product1
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4952247_Dark_Gray_Heather?wid=245&hei=240&op_sharpen=1",
    sale: "sale $9.99",
    price: "Regular $30.00",
    type: "Men's Tek Gear® Ultra Soft Fleece Joggers",
    stars: "(309)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4952247_Dark_Gray_Heather_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4952247_Rustic_Berry_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4952247_Cherry_Berry_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4952247_Gold_Glory_sw?wid=20&hei=20",
    poster_1:
      "https://media.kohlsimg.com/is/image/kohls/4952247_Dark_Gray_Heather?wid=96&hei=96&op_sharpen=1",
    poster_2:
      "https://media.kohlsimg.com/is/image/kohls/4952247_ALT?wid=96&hei=96&op_sharpen=1",
    poster_3:
      "https://media.kohlsimg.com/is/image/kohls/4952247_ALT2?wid=96&hei=96&op_sharpen=1",
  },
  {
    // product2
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/902047_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "For Price, Add to Cart",
    price: "Original $75.00",
    type: "Nike Air Monarch IV Men's Cross-Training Shoes",
    stars: "(2067)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/902047_White_Navy_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/902047_Black_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/902047_Black_White_Red_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/902047_Black_White_sw?wid=20&hei=20",
  },
  {
    // product3
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/5019170_Orange_Navy_Plaid?wid=245&hei=240&op_sharpen=1",
    sale: "sale $14.99",
    price: "Original $36.00",
    type: "Men's Sonoma Goods For Life® Flannel Woven Button-Down Shirt",
    stars: "(80)",

    btn1: "https://media.kohlsimg.com/is/image/kohls/5019170_Orange_Navy_Plaid_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/5019170_Purple_Black_Plaid_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/5019170_Olive_Camo_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/5019170_Gold_Black_Buffalo_sw?wid=20&hei=20",
  },
  {
    //product4
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3716820_Sand?wid=240&hei=240&op_sharpen=1",
    sale: "sale $44.99",
    price: "Regular $55.00",
    type: "Men's Haggar® Iron Free Premium Khaki™ Straight-Fit Flat Front Perfect Fit Waistband Casual Pant",
    stars: "(242)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3716820_Dark_Gray_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3716820_Sand_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3716820_Medium_Khaki_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3716820_Black_sw?wid=20&hei=20",
  },
  {
    //product5
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/1070694_Newman?wid=245&hei=240&op_sharpen=1",
    sale: "sale $29.99",
    price: "Regular $44.00",
    type: "Men's Lee® Relaxed Fit Jeans",
    stars: "(877)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/1070694_Worn_Light_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/1070694_Black_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/1070694_Newman_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/1070694_Pepper_Stone_sw?wid=20&hei=20",
  },
  {
    //product6
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/436526_Red?wid=240&hei=240&op_sharpen=1",
    price: "Regular $55.00",
    type: "Adult Converse All Star Chuck Taylor Sneakers",
    stars: "(2756)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/436526_Optic_White_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/436526_Black_White_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/436526_Navy_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/436526_Black_Black_sw?wid=20&hei=20",
  },
  {
    //product7
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3696341_Sand?wid=240&hei=240&op_sharpen=1",
    sale: "sale $44.99",
    price: "Regular $55.00",
    type: "Men's Haggar® Iron Free Premium Khaki™ Classic-Fit Flat Front Hidden Comfort Waistband Casual Pant",
    stars: "(424)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3696341_Navy_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3696341_Medium_Gray_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3696341_Charcoal_Heather_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3696341_Toast_sw?wid=20&hei=20",
  },
  {
    //product8
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/323407_New_Khaki?wid=245&hei=240&op_sharpen=1",
    sale: "sale $49.99",
    price: "Regular $69.50",
    type: "Men's Levi's® 511™ Slim-Fit Stretch Jeans",
    stars: "(1612)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/323407_Bee_Eye_Gray_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/323407_New_Khaki_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/323407_Dark_Hollow_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/323407_Black_Indigo_sw?wid=20&hei=20",
  },
  {
    //product9
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4970384_Medium_Stone?wid=245&hei=240&op_sharpen=1",
    sale: "sale $19.99",
    price: "Regular $36.00",
    type: "Men's Sonoma Goods For Life® Regular-Fit Jeans",
    stars: "(510)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4970384_Dark_Tint_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4970384_Indigo_Stone_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4970384_Dark_Worn_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4970384_Black_sw?wid=20&hei=20",
  },
  {
    //product10
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4952267_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $12.99",
    price: "Regular $40.00",
    type: "Men's Haggar® Cool Right® Performance Flex Classic-Fit Flat-Front Pants",
    stars: "(263)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4952267_Grey_Dark_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4952267_Dress_Blues_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4952267_Barret_Bay_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4952267_Artillery_Green_sw?wid=20&hei=20",
  },
  {
    //product11
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/1070546_Dark_Stone?wid=240&hei=240&op_sharpen=1",
    sale: "$29.99-$44.00",
    price: "Regular $44.00",
    type: "Men's Lee® Regular Fit Straight Leg Jeans",
    stars: "(1674)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/1070546_Vintage_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/1070546_Vintage_Stone_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/1070546_Medium_Stone_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/1070546_Black_sw?wid=20&hei=20",
  },
  {
    //product12
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3023504_Olive_Green?wid=240&hei=240&op_sharpen=1",
    sale: "sale $34.99",
    price: "Regular $44.00",
    type: "Men's Sonoma Goods For Life® Straight-Fit Cargo Pants",
    stars: "(376)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3023504_Light_Khaki_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3023504_Olive_Green_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3023504_Rock_Wall_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3023504_Dark_Khaki_sw?wid=20&hei=20",
  },
  {
    //product13
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3798326_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $49.99",
    price: "Regular $65.00",
    type: "Nike Revolution 5 Men's Running Shoes",
    stars: "(657)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3798326_Gray_Platinum_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3798326_Black_White_Anthracite_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3798326_Black_White_Antracite_sw?wid=20&hei=20",
  },
  {
    //product14
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/859106_ALT?wid=240&hei=240&op_sharpen=1",
    price: "Regular $60.00",
    type: "Adult Converse All Star Chuck Taylor High-Top Sneakers",
    stars: "(1771)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/859106_Black_White_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/859106_Optic_White_sw?wid=20&hei=20",
  },

  {
    //product15
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4299625_Black_Black_White?wid=240&hei=240&op_sharpen=1",
    sale: "sale $48.74",
    price: "Regular $64.99",
    type: "adidas Lite Racer Adapt 3.0 Men's Sneakers",
    stars: "(2300)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3753184_Abu_Volcano_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3753184_Burch_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3753184_Begonia_Tint_Overt_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4299625_White_Gray_sw?wid=20&hei=20",
  },
  {
    //product16
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3753184_Walter_Flex?wid=240&hei=240&op_sharpen=1",
    sale: "sale $49.99",
    price: "Regular $69.50",
    type: "Men's Levi's® 514™ Straight-Fit Flex Jeans",
    stars: "(192)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3753184_Abu_Volcano_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3753184_Burch_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3753184_Begonia_Tint_Overt_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3753184_Sultan_sw?wid=20&hei=20",
  },

  {
    //product17
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4228758_Black_White_Dark_Gray?wid=245&hei=240&op_sharpen=1",
    sale: "sale $84.99",
    price: "Regular $90.00",
    type: "Nike Air Max Excee Men's Running Shoes",
    stars: "(319)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4228758_Black_White_Dark_Gray_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4228758_Black_Dark_Gray_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4228758_White_Black_Platinum_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4228758_White_Black_Red_sw?wid=20&hei=20",
  },

  {
    //product18
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/2865618_Sand_Trap?wid=240&hei=240&op_sharpen=1",
    sale: "sale $34.99",
    price: "Regular $44.00",
    type: "Men's Sonoma Goods For Life® Regular-Fit Stretch Chino Pants",
    stars: "(169)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/2865618_Rock_Wall_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/2865618_Light_Khaki_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/2865618_Dark_Khaki_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/2865618_Midnight_Black_sw?wid=20&hei=20",
  },

  {
    //product19
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3537089_Sanibel_State?wid=245&hei=240&op_sharpen=1",
    sale: "sale $49.99",
    price: "Regular $69.50",
    type: "Men's Levi's® 511™ Slim-Fit Flex Jeans",
    stars: "(1155)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3537089_Panda_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3537089_Frog_Eye_Gray_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3537089_Begonia_Overt_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3537089_The_Banks_sw?wid=20&hei=20",
  },

  {
    //product20
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3582955_Dark_Gray_Heather?wid=240&hei=240&op_sharpen=1",
    price: "Regular $60.00",
    type: "Men's Nike Sportswear Club Fleece Full-Zip Hoodie",
    stars: "(249)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3582955_Charcoal_Heather_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3582955_Midnight_Navy_White_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3582955_Black_White_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3582955_Dark_Gray_Heather_sw?wid=20&hei=20",
  },

  {
    //product21
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4891810_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $49.99",
    price: "Regular $69.99",
    type: "ASICS GEL-Venture 8 Men's Trail Running Shoes",
    stars: "(113)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4891810_Graphite_Gray_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4891810_Black_Directoire_Blue_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4891810_Black_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4891810_Sheetrock_Habanero_sw?wid=20&hei=20",
  },

  {
    //product22
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/2979669_Black_Gray?wid=240&hei=240&op_sharpen=1",
    sale: "sale $32.00",
    price: "Regular $40.00",
    type: "Men's Hanes Ultimate® ComfortFlex Waistband 5-pack + 2 Bonus Boxer Briefs",
    stars: "(126)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/2979669_Black_Gray_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/2979669_Assorted_sw?wid=20&hei=20",
  },

  {
    //product23
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3342972_Black?wid=240&hei=240&op_sharpen=1",
    price: "Original $90.00",
    type: "Nike Manoa Men's Leather Boots",
    stars: "(152)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3342972_Haystack_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3342972_Black_sw?wid=20&hei=20",
  },

  {
    //product24
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3592654_Charcoal_Heather?wid=240&hei=240&op_sharpen=1",
    sale: "sale $39.99",
    price: "Regular $60.00",
    type: "Men's Columbia Steens Mountain™ Full-Zip Fleece Jacket",
    stars: "(246)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3592654_Light_Gray_Heather_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3592654_Tusk_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3592654_Collegiate_Navy_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3592654_Black_sw?wid=20&hei=20",
  },

  {
    //product25
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/2491741_Granite_Heather?wid=240&hei=240&op_sharpen=1",
    sale: "sale $30.00",
    price: "Regular $40.00",
    type: "Men's Champion® Fleece Powerblend Jogger Pants",
    stars: "(303)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/2491741_Black_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/2491741_Granite_Heather_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/2491741_Oxford_Gray_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/2491741_Navy_sw?wid=20&hei=20",
  },

  {
    //product26
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/5003962_Englsh_Elm?wid=240&hei=240&op_sharpen=1",
    sale: "sale $19.99",
    price: "Regular $36.00",
    type: "Men's Sonoma Goods For Life® Core Jogger Pants",
    stars: "(106)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/5003962_Englsh_Elm_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/5003962_Castle_Rock_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/5003962_Underwater_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/5003962_Black_sw?wid=20&hei=20",
  },

  {
    //product27
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/5027683_Gray_Mineral_Black?wid=240&hei=240&op_sharpen=1",
    sale: "sale $14.99",
    price: "Regular $37.00",
    type: "Big & Tall Croft & Barrow® Flannel Button-Down Shirt",
    stars: "(22)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/5027683_Gray_Mineral_Black_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/5027683_Baron_Blue_Gray_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/5027683_Navy_Gray_Heather_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/5027683_Gray_Heather_Green_sw?wid=20&hei=20",
  },
  {
    //product28
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4990192_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $59.99",
    price: "Original $65.00",
    type: "Nike AD Comfort Men's Shoes",
    stars: "(120)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4990192_Platinum_Black_Gray_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4990192_Black_Glacier_White_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4990192_Black_White_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4990192_Black_sw?wid=20&hei=20",
  },
  {
    //product29
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls//4960026_Black?wid=245&hei=240&op_sharpen=1",
    sale: "sale $19.99",
    price: "Regular $36.00",
    type: "Men's Sonoma Goods For Life® Slim-Fit Stretch Jeans",
    stars: "(487)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4960026_Light_Wash_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4960026_Black_Destruction_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4960026_Medium_Wash_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4960026_Light_Distruction_sw?wid=20&hei=20",
  },
  {
    //product30
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3336971_Black?wid=240&hei=240&op_sharpen=1",
    sale: "sale $119.99",
    price: "Regular $150.00",
    type: "Men's Haggar® Travel Performance Tailored-Fit Stretch Suit Jacket",
    stars: "(151)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3336971_Black_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3336971_Dark_Gray_Heather_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3336971_Gray_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3336971_Blue_sw?wid=20&hei=20",
  },
  {
    //product31
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/2244568_Marine_Blue?wid=240&hei=240&op_sharpen=1",
    sale: "sale $34.99",
    price: "Regular $44.00",
    type: "Men's Wrangler Relaxed-Fit Stretch Jeans",
    stars: "(192)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/2244568_Gray_Tint_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/2244568_Blackened_Indigo_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/2244568_Classic_Stone_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/2244568_Marine_Blue_sw?wid=20&hei=20",
  },
  {
    //product32
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3932653_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $9.99",
    price: "Regular $15.00",
    type: "Men's Tek Gear® Dry Tek Shorts",
    stars: "(246)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3932653_Mineral_Black_Gray_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3932653_Cherry_Berry_Black_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3932653_Mineral_Black_Cherry_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3932653_Hawk_Gray_Black_sw?wid=20&hei=20",
  },
  {
    //product33
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3346420_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $52.49",
    price: "Regular $69.99",
    type: "New Balance® 619 v2 Men's Cross-Training Shoes",
    stars: "(454)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3346420_White_Navy_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3346420_Black_sw?wid=20&hei=20",
  },
  {
    //product34
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4517353_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $64.99",
    price: "Regular $70.00",
    type: "Under Armour Assert 9 Men's Running Shoes",
    stars: "(286)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4517353_Mod_Gray_White_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4517353_Navy_White_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4517353_Black_White_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4517353_Black_sw?wid=20&hei=20",
  },
  {
    //product35
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3583146_Midnight_Navy_White?wid=240&hei=240&op_sharpen=1",

    price: "Regular $50.00",
    type: "Under Armour Assert 9 Men's Running Shoes",
    stars: "(163)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3583146_Dark_Gray_Heather_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3583146_Charcoal_Heather_White_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3583146_Black_White_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3583146_University_Red_White_sw?wid=20&hei=20",
  },
  {
    //product36
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/5205429_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $41.25",
    price: "Regular $55.00",
    type: "Men's Champion® Ombre Dip-Dye Fleece Hoodie",
    stars: "(65)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/5205429_Poppy_Orange_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/5205429_Cargo_Olive_Black_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/5205429_Natural_Dark_Khaki_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/5205429_Dream_Pink_Black_sw?wid=20&hei=20",
  },

  {
    //product37
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3233736_Gray?wid=240&hei=240&op_sharpen=1",
    sale: "sale $44.99",
    price: "Regular $59.99",
    type: "Sonoma Goods For Life® Freer Men's Dress Shoes",
    stars: "(242)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3233736_Cognac_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3233736_Gray_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3233736_Black_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3233736_Tan_sw?wid=20&hei=20",
  },

  {
    //product38
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4882944_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $30.00",
    price: "Regular $40.00",
    type: "Men's adidas Tricot Track Pants",
    stars: "(100)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4882944_Dark_Gray_Heather_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4882944_Black_Scarlet_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4882944_Black_White_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4882944_Legend_Ink_sw?wid=20&hei=20",
  },
  {
    //product39
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3336984_Blue?wid=245&hei=240&op_sharpen=1",
    sale: "sale $60.00",
    price: "Regular $100.00",
    type: "Men's Haggar® Travel Performance Tailored-Fit Stretch Flat-Front Suit Pants",
    stars: "(95)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3336984_Dark_Gray_Heather_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3336984_Black_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3336984_Gray_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3336984_Navy_sw?wid=20&hei=20",
  },
  {
    //product40
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3217358_White_Dark_Gray?wid=240&hei=240&op_sharpen=1",
    sale: "sale $39.99",
    price: "Regular $64.99",
    type: "Mens NEW BALANCE",
    stars: "(705)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3217358_White_Dark_Gray_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3217358_Black_sw?wid=20&hei=20",
  },
  {
    //product41
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4952594_Dark_Rinse?wid=240&hei=240&op_sharpen=1",
    sale: "sale $19.99",
    price: "Regular $36.00",
    type: "Men's Sonoma Goods For Life® Relaxed Fit Jeans",
    stars: "(240)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4952594_Dark_Rinse_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4952594_Light_Wash_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4952594_Dark_Wash_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4952594_Med_Wash_sw?wid=20&hei=20",
  },
  {
    //product42
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3737517?wid=240&hei=240&op_sharpen=1",
    price: "Regular $64.99",
    type: "Vans® Atwood DX Men's Shoes",
    stars: "(199)",
  },
  {
    //product43
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4882714_Bold_Blue_White?wid=245&hei=240&op_sharpen=1",
    sale: "sale $33.75",
    price: "Regular $45.00",
    type: "Men's adidas Feel Cozy Pullover Fleece Hoodie",
    stars: "(27)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4882714_Bold_Blue_White_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4882714_Black_White_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4882714_Medium_Gray_Black_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4882714_Victory_Crimson_White_sw?wid=20&hei=20",
  },
  {
    //product44
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3362906_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $48.74",
    price: "Regular $64.99",
    type: "New Balance® 412 v3 Men's Trail Running Shoes",
    stars: "(754)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3362906_Petrol_Orange_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3362906_Gray_Red_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3362906_Black_Gray_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3362906_Blue_Yellow_sw?wid=20&hei=20",
  },
  {
    //product45
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/4952262_Cherry_Berry?wid=240&hei=240&op_sharpen=1",
    sale: "sale $9.99",
    price: "Regular $26.00",
    type: "Men's Tek Gear® Ultra Soft Crew Sweatshirt",
    stars: "(112)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/4952262_Aubrey_Purple_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/4952262_Dress_Blues_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/4952262_Rustic_Berry_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/4952262_Mineral_Black_sw?wid=20&hei=20",
  },
  {
    //product46
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/3923240_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $59.99",
    price: "Regular $65.00",
    type: "Nike Court Vision Low Men's Basketball Shoes",
    stars: "(168)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/3923240_White_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/3923240_Black_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/3923240_White_Black_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/3923240_Black_Photon_Dust_sw?wid=20&hei=20",
  },
  {
    //product47
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls//5018041_Red_Multi_Buffalo?wid=245&hei=240&op_sharpen=1",
    sale: "sale $29.99",
    price: "Regular $36.00",
    type: "Men's Croft & Barrow® Plaid Woven Flannel Button-Down Shirt",
    stars: "(22)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/5018041_Brown_Plaid_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/5018041_Gray_Black_Buff_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/5018041_Blue_Multi_Plaid_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/5018041_Orange_Gray_Plaid_sw?wid=20&hei=20",
  },

  {
    //product48
    img_prod:
      "https://media.kohlsimg.com/is/image/kohls/2511789_ALT?wid=240&hei=240&op_sharpen=1",
    sale: "sale $29.99",
    price: "Regular $49.99",
    type: "FILA™ Windshift 15 Men's Running Shoes",
    stars: "(702)",
    btn1: "https://media.kohlsimg.com/is/image/kohls/2511789_Gray_Orange_sw?wid=20&hei=20",
    btn2: "https://media.kohlsimg.com/is/image/kohls/2511789_Gray_Green_sw?wid=20&hei=20",
    btn3: "https://media.kohlsimg.com/is/image/kohls/2511789_Navy_Gray_sw?wid=20&hei=20",
    btn4: "https://media.kohlsimg.com/is/image/kohls/2511789_Gray_Yellow_sw?wid=20&hei=20",
  },
];

var body = document.querySelector("body");
var mainDiv = document.querySelector("#container");

showProducts();
function showProducts() {
  products.map(function (item) {
    var imgDiv = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", item.img_prod);
    img.setAttribute("id", "prodimg");
    // img.addEventListener("click",function(){
    //   alert("hey go to")
    // })
    var price = document.createElement("h4");
    price.textContent = item.price;
    var btn = document.createElement("button");
    btn.textContent = item.type;

    var sale = document.createElement("h2");

    sale.textContent = item.sale;

    var rating = document.createElement("div");
    rating.setAttribute("id", "ratingDiv");
    var starDiv = document.createElement("div");
    starDiv.setAttribute("id", "star");
    starDiv.innerHTML = `<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`;
    var rs = starDiv.innerHTML;
    var points = document.createElement("div");
    points.setAttribute("id", "pointsDiv");
    points.textContent = item.stars;
    var rp = points.textContent;
    rating.innerHTML = `<p>${rs} </p><p>${rp}</p>`;

    var style = document.createElement("button");
    style.setAttribute("class", "stylebtn");
    var a = item.btn1;
    style.style.backgroundImage = `url(${a})`;
    var style1 = document.createElement("button");
    style1.setAttribute("class", "stylebtn");
    var b = item.btn2;
    style1.style.backgroundImage = `url(${b})`;

    var style2 = document.createElement("button");
    style2.setAttribute("class", "stylebtn");

    var c = item.btn3;
    style2.style.backgroundImage = `url(${c})`;

    var style3 = document.createElement("button");
    style3.setAttribute("class", "stylebtn");

    var d = item.btn4;
    style3.style.backgroundImage = `url(${d})`;

    var vbtn = document.createElement("div");
    vbtn.setAttribute("id", "colbtn");
    vbtn.append(style, style1, style2, style3);
    imgDiv.append(img, vbtn, sale, price, btn, rating);
    mainDiv.append(imgDiv);
  });
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
  console.log("store clicked");
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

var data = [
  {
    type: "Men's Clothing",
    img_url:
      "https://media.kohlsimg.com/is/image/kohls/3583992_Black_White?wid=125&hei=125&op_sharpen=1",
  },
  {
    type: "Tech Gifts",
    img_url:
      "https://media.kohlsimg.com/is/image/kohls/4575939_ALT?wid=125&hei=125&op_sharpen=1",
  },
  {
    type: "Sports Fan",
    img_url:
      "https://media.kohlsimg.com/is/image/kohls/5316419?wid=125&hei=125&op_sharpen=1",
  },
  {
    type: "Men's Grooming",
    img_url:
      "https://media.kohlsimg.com/is/image/kohls/4971303?wid=125&hei=125&op_sharpen=1",
  },
  {
    type: "Novelty & Gifts",
    img_url:
      "https://media.kohlsimg.com/is/image/kohls/3775451?wid=125&hei=125&op_sharpen=1",
  },
];

var accessories = document.getElementById("Accessories");
showaccessories();

function showaccessories() {
  data.map(function (item) {
    var imgDiv = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", item.img_url);
    var p = document.createElement("p");
    p.textContent = item.type;
    imgDiv.append(img, p);
    accessories.append(imgDiv);
  });
}

// Bottom Slider Starts
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
// Bottom Slider Ends
