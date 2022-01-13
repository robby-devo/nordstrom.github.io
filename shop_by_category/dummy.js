
let homeRedirect = document.getElementById("homeRedirect");
homeRedirect.addEventListener("click", redirectToHome);

function redirectToHome() {
    window.location.href = "..landing_page/landingPage.html";
}

window.onload = function logged() {
    var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if(isLoggedIn){
        //show name and logout option
        var sign = document.getElementById("signInOption");
        var currentEmail = JSON.parse(localStorage.getItem("currentEmail"));
        var allEmails = JSON.parse(localStorage.getItem("allEmails"));
        var details = allEmails.filter(function (el) {
            return el.curEmail == currentEmail;
        })[0];
        sign.innerHTML = details.fName;
        var logoutDiv = document.getElementById("signIn")
        var logout = document.createElement("option");
        logout.value = "Sign Out";
        logout.innerHTML = "Sign Out";
        logout.addEventListener("click", () => {
            isLoggedIn = false;
            localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
            window.location.reload();
        });
        logoutDiv.append(logout);
    }
    else{
        //show Sign In
        var sign = document.getElementById("signInOption");
        sign.innerHTML = "Sign In";
        sign.value = "Sign In";
    }
}
function signIn(){
    /* redirect to sign in page */
    window.location.href = "../login page/login.html";
}

function shoppingCart(){
  /* redirect to shopping cart */
  window.location.href = "../shopping_cart/shopping_cart.html";
}

/* dynamic nav cart count */
function loadNavCount(){
  /* loads navbar cart count */

  const navCart = document.getElementById("navCartCount");

  //get meta cart
  let cart = JSON.parse(localStorage.getItem("metaCart"));

  if(cart == null){
    navCart.innerHTML = 0;
  }
  
  navCart.innerHTML = cart.count;

}

//load navCount
loadNavCount();
//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

const allproducts = [
  {
    id: 1,
    name: "Supergoop! Unseen Sunscreen Broad",
    price: 1335.97,
    img1: "images/product1.jpeg",
    img2: "images/product1.1.jpeg",
    brand: "Supergoop",
  },
  {
    id: 2,
    name: "Olaplex No. 4 Bond Maintenance™ Shampoo",
    price: 1100,
    img1: "images/product2.jpeg",
    img2: "images/product2.2.jpeg",
    brand: "Supergoop",
  },
  {
    id: 3,
    name: "Dyson Supersonic™ Hair Dryer Copper Limited",
    price: 6000,
    img1: "images/product3.jpeg",
    img2: "images/product3.3.jpeg",
    brand: "Dyson",
  },
  {
    id: 4,
    name: "BLEU DE CHANEL",
    price: 10600,
    img1: "images/product4.jpeg",
    img2: "images/product4.jpeg",
    brand: "Dyson",
  },
  {
    id: 5,
    name: "Fjällräven Kånken Water Resistant Backpack",
    price: 4900,
    img1: "images/product5.jpeg",
    img2: "images/product5.5.jpeg",
    brand: "Dyson",
  },
  {
    id: 6,
    name: "Travis Mathew Beck Stretch Performance Shorts",
    price: 31000,
    img1: "images/product6.jpeg",
    img2: "images/product6.6.jpeg",
    brand: "Armour",
  },
  {
    id: 7,
    name: "Under Armour Men's UA Seamless Half Zip Performance Pullover",
    price: 2800,
    img1: "images/product7.jpeg",
    img2: "images/product7.1.jpeg",
    brand: "Armour",
  },
  {
    id: 8,
    name: "Nordstrom Tech-Smart Pique Polo",
    price: 7000,
    img1: "images/product8.jpeg",
    img2: "images/product8.8.jpeg",
    brand: "Armour",
  },
];

// if local storage is null set products in local storage
if (localStorage.getItem("products") == null) {
  localStorage.setItem("products", JSON.stringify(allproducts));
}

var productitem = document.querySelector("#product_items");

function showProducts(el) {
  var prodimg = document.createElement("div");
  prodimg.setAttribute("class", "prod_img");

  var img = document.createElement("img");
  img.setAttribute("class", "sec-img");
  img.src = el.img1;
  img.addEventListener("mouseover", function () {
    img.src = el.img2;
  });
  img.addEventListener("mouseout", function () {
    img.src = el.img1;
  });

  var heading3 = document.createElement("h3");
  heading3.textContent = el.name;

  var heading4 = document.createElement("h4");
  heading4.textContent = "INR" + " " + el.price;

  var heading5 = document.createElement("h5");
  heading5.textContent = "Brand:" + " " + el.brand;

  var a = document.createElement("a");
  a.setAttribute("class", "add-cart cart1");
  a.textContent = "Quick View";

  var rating = document.createElement("div");
  rating.setAttribute("class", "rating");

  rating.innerHTML = `<span><i class="fas fa-star"></i></span>
  <span><i class="fas fa-star"></i></span>
  <span><i class="fas fa-star"></i></span>
  <span><i class="fas fa-star"></i></span>`;

  // append all child  to product
  prodimg.append(img, heading3, heading4, a, rating, heading5);

  productitem.append(prodimg);

  //   productitem.innerHTML = ` <div class="prod_img">
  //   <img src="" alt="" />
  //   <img class="sec-img" src="${el.img1}" alt="" />
  //   <h3>${el.name}</h3>
  //   <h4>${el.price}</h4>
  //   <a class="add-cart cart1" href="">Quick View</a>
  //   <div class="rating">
  //     <span><i class="fas fa-star"></i></span>
  //     <span><i class="fas fa-star"></i></span>
  //     <span><i class="fas fa-star"></i></span>
  //     <span><i class="fas fa-star"></i></span>
  //   </div>
  // </div>`;
}

function getProducts() {
  var data = JSON.parse(localStorage.getItem("products"));

  data.forEach(function (product) {
    showProducts(product);
  });
}

getProducts();

function sortl() {
  var data = JSON.parse(localStorage.getItem("products"));

  data.sort(function (a, b) {
    return a.price - b.price;
  });

  productitem.innerHTML = null;

  data.forEach(function (product) {
    showProducts(product);
  });
}
function sortH() {
  var data = JSON.parse(localStorage.getItem("products"));

  data.sort(function (a, b) {
    return b.price - a.price;
  });

  productitem.innerHTML = null;

  data.forEach(function (product) {
    showProducts(product);
  });
}

function getSelected() {
  var selectedValue = document.getElementById("sorting").value;
  if (selectedValue == "low") {
    sortl();
  } else {
    sortH();
  }
}

function myFunction(msg) {
  let product_items = document.getElementById("product_items");
  product_items.innerHTML = null;
  var data = JSON.parse(localStorage.getItem("products"));
  let filterData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].brand == msg) {
      showProducts(data[i]);
      // filterData.push(data[i]);
    }
  }
  console.log(filterData);
}



//  sortl()

// getSelectValue()

// Navbar Javascript

// let annSale = document.querySelector("#annSale");
// annSale.addEventListener("mouseover", dropDown);
// annSale.addEventListener("mouseleave", dropDown2);

// let women = document.getElementById("women");
// women.addEventListener("mouseover", dropDownWomen);
// women.addEventListener("mouseleave", dropDownWomen2);

// let men = document.getElementById("men");
// men.addEventListener("mouseover", dropDownMen);
// men.addEventListener("mouseleave", dropDownMen2);

// let kids = document.getElementById("kids");
// kids.addEventListener("mouseover", dropDownKids);
// kids.addEventListener("mouseleave", dropDownKids2);

// let activeWear = document.getElementById("activeWear");
// activeWear.addEventListener("mouseover", dropDownWear);
// activeWear.addEventListener("mouseleave", dropDownWear2);

// let home = document.getElementById("home");
// home.addEventListener("mouseover", dropDownHome);
// home.addEventListener("mouseleave", dropDownHome2);

// let gifts = document.getElementById("gifts");
// gifts.addEventListener("mouseover", dropDownGifts);
// gifts.addEventListener("mouseleave", dropDownGifts2);

// let beauty = document.getElementById("beauty");
// beauty.addEventListener("mouseover", dropDownBeauty);
// beauty.addEventListener("mouseleave", dropDownBeauty2);

// let sale = document.getElementById("sale");
// sale.addEventListener("mouseover", dropDownSale);
// sale.addEventListener("mouseleave", dropDownSale2);

// let designer = document.getElementById("designer");
// designer.addEventListener("mouseover", dropDownDesigner);
// designer.addEventListener("mouseleave", dropDownDesigner2);

// let brand = document.getElementById("brands");
// brand.addEventListener("mouseover", dropDownBrand);
// brand.addEventListener("mouseleave", dropDownBrand2);

// function dropDown() {
//   let dropMainContainer = document.querySelector(".dropMainContainer");
//   dropMainContainer.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDown2() {
//   let dropMainContainer = document.querySelector(".dropMainContainer");
//   dropMainContainer.style.display = "none";
// }

// function dropDownWomen() {
//   let dropMainContainer2 = document.querySelector(".dropMainContainer2");
//   dropMainContainer2.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownWomen2() {
//   let dropMainContainer2 = document.querySelector(".dropMainContainer2");
//   dropMainContainer2.style.display = "none";
// }

// function dropDownMen() {
//   let dropMainContainer3 = document.querySelector(".dropMainContainer3");
//   dropMainContainer3.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownMen2() {
//   let dropMainContainer3 = document.querySelector(".dropMainContainer3");
//   dropMainContainer3.style.display = "none";
// }

// function dropDownKids() {
//   let dropMainContainer4 = document.querySelector(".dropMainContainer4");
//   dropMainContainer4.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownKids2() {
//   let dropMainContainer4 = document.querySelector(".dropMainContainer4");
//   dropMainContainer4.style.display = "none";
// }

// function dropDownWear() {
//   let dropMainContainer5 = document.querySelector(".dropMainContainer5");
//   dropMainContainer5.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownWear2() {
//   let dropMainContainer5 = document.querySelector(".dropMainContainer5");
//   dropMainContainer5.style.display = "none";
// }

// function dropDownHome() {
//   let dropMainContainer6 = document.querySelector(".dropMainContainer6");
//   dropMainContainer6.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownHome2() {
//   let dropMainContainer6 = document.querySelector(".dropMainContainer6");
//   dropMainContainer6.style.display = "none";
// }

// function dropDownGifts() {
//   let dropMainContainer7 = document.querySelector(".dropMainContainer7");
//   dropMainContainer7.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownGifts2() {
//   let dropMainContainer7 = document.querySelector(".dropMainContainer7");
//   dropMainContainer7.style.display = "none";
// }

// function dropDownBeauty() {
//   let dropMainContainer8 = document.querySelector(".dropMainContainer8");
//   dropMainContainer8.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownBeauty2() {
//   let dropMainContainer8 = document.querySelector(".dropMainContainer8");
//   dropMainContainer8.style.display = "none";
// }

// function dropDownSale() {
//   let dropMainContainer9 = document.querySelector(".dropMainContainer9");
//   dropMainContainer9.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownSale2() {
//   let dropMainContainer9 = document.querySelector(".dropMainContainer9");
//   dropMainContainer9.style.display = "none";
// }

// function dropDownBrand() {
//   let dropMainContainer10 = document.querySelector(".dropMainContainer10");
//   dropMainContainer10.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownBrand2() {
//   let dropMainContainer10 = document.querySelector(".dropMainContainer10");
//   dropMainContainer10.style.display = "none";
// }

// function dropDownDesigner() {
//   let dropMainContainer11 = document.querySelector(".dropMainContainer11");
//   dropMainContainer11.style.display = "inherit";
//   // alert("Im dropdown");
// }
// function dropDownDesigner2() {
//   let dropMainContainer11 = document.querySelector(".dropMainContainer11");
//   dropMainContainer11.style.display = "none";
// }

// Navbar Ending
