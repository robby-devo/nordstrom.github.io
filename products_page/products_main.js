/* product data */
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


let homeRedirect = document.getElementById("homeRedirect");
homeRedirect.addEventListener("click", redirectToHome);

function redirectToHome() {
    window.location.href = "../landing_page/landingPage.html";
}

const products = [
  {
    id:0,
    name:"Gala Two Strap Slide Sandal",
    brand:"SAM EDELMAN",
    price:3304,
    disc:"30%",
    offValue:4720,
    desc1:"Price varies with currency exchange rates and may be different than in store.",
    desc2:"Minimal detailing elevates the wear-with-everything versatility of a double-band slide sandal crafted with a flat sole and a cushioned footbed.", 
    ratings: 4,
    zoomImg:"images/product_1/zoom_img.jpeg",
    img1:"images/product_1/small_img_1.jpeg",
    img2:"images/product_1/small_img_2.jpeg",
    img3:"images/product_1/small_img_3.jpeg",
    img4:"images/product_1/small_img_4.jpeg"
  },
  {
    id:1,
    name:"Off the Shoulder Dress",
    brand:"CHARLES HENRY",
    price:4157,
    disc:"40%",
    offValue:6929,
    desc1:"Price varies with currency exchange rates and may be different than in store.",
    desc2:"This vivid dress has a trendy off-the-shoulder neckline styled with a flirty ruffle that enhances the crisp, fluttery silhouette.", 
    ratings: 5,
    zoomImg:"images/product_2/zoom_img.jpeg",
    img1:"images/product_2/small_img_1.jpeg",
    img2:"images/product_2/small_img_2.jpeg",
    img3:"images/product_2/small_img_3.jpeg",
    img4:"images/product_2/small_img_4.jpeg"
  },
  {
    id:2,
    name:"Granada Slide Sandal",
    brand:"SAM EDELMAN",
    price:3304,
    disc:"10%",
    offValue:4720,
    desc1:"Price varies with currency exchange rates and may be different than in store.",
    desc2:"Your style is secured by the big, bold buckle of this slide that you can shuffle on in your choice of dynamic colors, textures and finishes.", 
    ratings: 4,
    zoomImg:"images/product_3/zoom_img.jpeg",
    img1:"images/product_3/small_img_1.jpeg",
    img2:"images/product_3/small_img_2.jpeg",
    img3:"images/product_3/small_img_3.jpeg",
    img4:"images/product_3/small_img_4.jpeg"
  },
  {
    id:3,
    name:"Garson Slide Sandal",
    brand:"SAM EDELMAN",
    price:4406,
    disc:"25%",
    offValue:6295,
    desc1:"Price varies with currency exchange rates and may be different than in store.",
    desc2:"A cushioned footbed comfortably grounds you in this chic slide sandal topped with knotted leather straps.", 
    ratings: 5,
    zoomImg:"images/product_4/zoom_img.jpeg",
    img1:"images/product_4/small_img_1.jpeg",
    img2:"images/product_4/small_img_2.jpeg",
    img3:"images/product_4/small_img_3.jpeg",
    img4:"images/product_4/small_img_4.jpeg",
  },
]
/* end */
/* toggle dropdown show effect */

function toggleSizeDropdown(){
    let sizeDropdown = document.getElementById("sizeDropdown");
    let colorDropdown = document.getElementById("colorDropdown");
    if(sizeDropdown.style.visibility == "visible"){
        sizeDropdown.style.visibility = "hidden";
    }
    else{
        colorDropdown.style.visibility = "hidden";
        sizeDropdown.style.visibility = "visible";
    }
}


function toggleColorDropdown(){
    let sizeDropdown = document.getElementById("sizeDropdown");
    let colorDropdown = document.getElementById("colorDropdown");
    if(colorDropdown.style.visibility == "visible"){
        colorDropdown.style.visibility = "hidden";
    }
    else{
        sizeDropdown.style.visibility = "hidden";
        colorDropdown.style.visibility = "visible";
    }    
}
/* load selected product */
function loadSelectedProduct(){
  /* reads selected product value from storage and manipulates DOM to change product details */
  
  //read value from local storage
  const productId = JSON.parse(localStorage.getItem('selectedProduct'));

  //find product with id
  let product;
  for(var i=0; i<products.length; i++){
    if(products[i].id == productId){
      //found
      product = products[i];
      break;
    }
  }

  //update values on page
  loadProductData(product);

}

function loadProductData(product){
  /* loads product data on page by updating values through DOM */
  
  //update left container images
  const img1 = document.getElementById("img1");
  img1.setAttribute("src", product.img1);

  const img2 = document.getElementById("img2");
  img2.setAttribute("src", product.img2);

  const img3 = document.getElementById("img3");
  img3.setAttribute("src", product.img3);

  const img4 = document.getElementById("img4");
  img4.setAttribute("src", product.img4);

  //update zoom image
  const zoomer = document.getElementById("zoomerImg");
  zoomer.style.backgroundImage = `url(${product.zoomImg})`;

  //update ratings
  const ratingsDiv = document.getElementById("ratings");
  ratingsDiv.innerHTML = "";
  for(var i=0; i<product.ratings; i++){
    const starIcon = document.createElement("span");
    starIcon.setAttribute("class", "material-icons");
    starIcon.innerHTML = "star";
    ratingsDiv.append(starIcon);
  }
  const reviews = document.createElement("span");
  reviews.innerHTML = `(${Math.ceil(Math.random()*199)})`;
  ratingsDiv.append(reviews);

  //update title
  const title = document.getElementById("productName");
  title.innerHTML = product.name;

  //update brand
  const brand = document.getElementById("productBrand");
  brand.innerHTML = product.brand;
  const brand2 = document.getElementById("brand2");
  brand2.innerHTML = product.brand;

  //update price
  const mainPrice = document.getElementById("mainPrice");
  mainPrice.innerHTML = product.price;

  //update discounted price
  const discPrice = document.getElementById("discPrice");
  discPrice.innerHTML = product.offValue;

  //update discounted percentage
  const discPercent = document.getElementById("discPercent");
  discPercent.innerHTML = product.disc;  
  

  //update description
  const p1 = document.getElementById("descP1");
  p1.innerHTML = product.desc1;
  const p2 = document.getElementById("descP2");
  p2.innerHTML = product.desc2;
}

/* end */


/* image zoomer */

const prodImg = document.getElementById("zoomerImg");

prodImg.addEventListener("mousemove", (e) => {
    const width = prodImg.offsetWidth;
    const height = prodImg.offsetHeight;
    let bgPosX = (e.offsetX / width) * 100;
    let bgPosY = (e.offsetY / height) * 100;
    prodImg.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});
/* end */



/* shopping cart */
function addToCart(){
  /* adds items to local storage cart variable*/

  //get curr page product id
  const productId = Number(JSON.parse(localStorage.getItem("selectedProduct")));
  //check qty
  if(cartItemExists(productId)){
    console.log("already exists in cart");
  }
  else{
    //find product with id
    let product;
    for(var i=0; i<products.length; i++){
      if(products[i].id == productId){
        //found
        product = products[i];
        break;
      }
    }  

    const cartItem = {
      prodObj: product,
      qty: 1,
      subTotal: product.price
    }

    //get cart
    let cart = JSON.parse(localStorage.getItem("cart"));

    if(cart == null){
      //create empty cart
      cart = [];
    }

    //append current product to cart
    cart.push(cartItem);
    localStorage.setItem("cart",JSON.stringify(cart));

    //update cart meta data
    updateCartMetaData(cartItem);

    //update navbar cart
    loadNavCount();

    //display success
    showSuccess(cartItem, 0);
  }


}

function cartItemExists(productId){
  /* checks if cart item exists if it does update qty and subtotal */
  //get cart
  let cart = JSON.parse(localStorage.getItem("cart"));
  
  if(cart != null){
    for(var i=0; i<cart.length; i++){
      if(cart[i].prodObj.id == productId){
        //update qty
        cart[i].qty += 1;

        //update sub total
        cart[i].subTotal += cart[i].prodObj.price;

        //store in localStorage
        localStorage.setItem("cart",JSON.stringify(cart));     

        //update cart meta data
        updateCartMetaData(cart[i]);

        //update navbar cart
        loadNavCount();   

        //display success
        showSuccess(cart[i], 1);

        return true;
      }
    }
    return false;
  }
}

function updateCartMetaData(cartItem){
  /* updates cart meta data which stores extra info about cart */

    //get meta cart
    let cart = JSON.parse(localStorage.getItem("metaCart"));

    if(cart == null){
      //create empty cart
      cart = {
        count: 0,
        total: 0
      }
    }

    //update meta cart with cart info
    cart.count++;
    cart.total += cartItem.prodObj.price;
    localStorage.setItem("metaCart",JSON.stringify(cart));

    return true;
}

function showSuccess(cartItem, qty){
  /* shows success div and some cart info */

  //update cart img
  const cartImg = document.getElementById("cartImg");
  cartImg.setAttribute("src",cartItem.prodObj.zoomImg);

  //update name and brand
  const cartProductName = document.getElementById("cartProdName");
  cartProductName.innerHTML = cartItem.prodObj.name;
  const cartProductBrand = document.getElementById("cartProdBrand");
  cartProductBrand.innerHTML = cartItem.prodObj.brand;

  //update price
  const cartPrice = document.getElementById("cartPrice");
  cartPrice.innerHTML = cartItem.prodObj.price;

  //update count
  //get meta cart
  let cart = JSON.parse(localStorage.getItem("metaCart"));
  const cartCount = document.getElementById("cartCount");
  cartCount.innerHTML = cart.count;
  if(qty == 1){
    const cartQty = document.getElementById("cartQty");
    cartQty.innerHTML = ` (qty:${cartItem.qty})`;   
  }

  //finally show success div 
  const successDiv = document.getElementById("currCart");
  successDiv.style.visibility = "visible";

  return true;
}

function hideSuccess(){
  /* hide div after user clicks on close */
  const successDiv = document.getElementById("currCart");
  successDiv.style.visibility = "hidden";
}

function shoppingCart(){
  /* redirect to shopping cart */
  window.location.href = "../shopping_cart/shopping_cart.html";
}
/* end */

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
/* end */
/* checkout page */
  function checkOut(){
    /* redirect user to checkout page if user is logged in */
    window.location.href = "../checkout_page/checkout.html";
  }
/* end */
/* header */
let annSale = document.querySelector("#annSale");
annSale.addEventListener("mouseover", dropDown);
annSale.addEventListener("mouseleave", dropDown2);

let women = document.getElementById("women");
women.addEventListener("mouseover", dropDownWomen);
women.addEventListener("mouseleave", dropDownWomen2);

let men = document.getElementById("men");
men.addEventListener("mouseover", dropDownMen);
men.addEventListener("mouseleave", dropDownMen2);

let kids = document.getElementById("kids");
kids.addEventListener("mouseover", dropDownKids);
kids.addEventListener("mouseleave", dropDownKids2);

let activeWear = document.getElementById("activeWear");
activeWear.addEventListener("mouseover", dropDownWear);
activeWear.addEventListener("mouseleave", dropDownWear2);

let home = document.getElementById("home");
home.addEventListener("mouseover", dropDownHome);
home.addEventListener("mouseleave", dropDownHome2);

let gifts = document.getElementById("gifts");
gifts.addEventListener("mouseover", dropDownGifts);
gifts.addEventListener("mouseleave", dropDownGifts2);

let beauty = document.getElementById("beauty");
beauty.addEventListener("mouseover", dropDownBeauty);
beauty.addEventListener("mouseleave", dropDownBeauty2);

let sale = document.getElementById("sale");
sale.addEventListener("mouseover", dropDownSale);
sale.addEventListener("mouseleave", dropDownSale2);

let designer = document.getElementById("designer");
designer.addEventListener("mouseover", dropDownDesigner);
designer.addEventListener("mouseleave", dropDownDesigner2);

let brand = document.getElementById("brands");
brand.addEventListener("mouseover", dropDownBrand);
brand.addEventListener("mouseleave", dropDownBrand2);

function dropDown() {
  let dropMainContainer = document.querySelector(".dropMainContainer");
  dropMainContainer.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDown2() {
  let dropMainContainer = document.querySelector(".dropMainContainer");
  dropMainContainer.style.display = "none";
}

function dropDownWomen() {
  let dropMainContainer2 = document.querySelector(".dropMainContainer2");
  dropMainContainer2.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownWomen2() {
  let dropMainContainer2 = document.querySelector(".dropMainContainer2");
  dropMainContainer2.style.display = "none";
}

function dropDownMen() {
  let dropMainContainer3 = document.querySelector(".dropMainContainer3");
  dropMainContainer3.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownMen2() {
  let dropMainContainer3 = document.querySelector(".dropMainContainer3");
  dropMainContainer3.style.display = "none";
}

function dropDownKids() {
  let dropMainContainer4 = document.querySelector(".dropMainContainer4");
  dropMainContainer4.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownKids2() {
  let dropMainContainer4 = document.querySelector(".dropMainContainer4");
  dropMainContainer4.style.display = "none";
}

function dropDownWear() {
  let dropMainContainer5 = document.querySelector(".dropMainContainer5");
  dropMainContainer5.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownWear2() {
  let dropMainContainer5 = document.querySelector(".dropMainContainer5");
  dropMainContainer5.style.display = "none";
}

function dropDownHome() {
  let dropMainContainer6 = document.querySelector(".dropMainContainer6");
  dropMainContainer6.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownHome2() {
  let dropMainContainer6 = document.querySelector(".dropMainContainer6");
  dropMainContainer6.style.display = "none";
}

function dropDownGifts() {
  let dropMainContainer7 = document.querySelector(".dropMainContainer7");
  dropMainContainer7.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownGifts2() {
  let dropMainContainer7 = document.querySelector(".dropMainContainer7");
  dropMainContainer7.style.display = "none";
}

function dropDownBeauty() {
  let dropMainContainer8 = document.querySelector(".dropMainContainer8");
  dropMainContainer8.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownBeauty2() {
  let dropMainContainer8 = document.querySelector(".dropMainContainer8");
  dropMainContainer8.style.display = "none";
}

function dropDownSale() {
  let dropMainContainer9 = document.querySelector(".dropMainContainer9");
  dropMainContainer9.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownSale2() {
  let dropMainContainer9 = document.querySelector(".dropMainContainer9");
  dropMainContainer9.style.display = "none";
}

function dropDownBrand() {
  let dropMainContainer10 = document.querySelector(".dropMainContainer10");
  dropMainContainer10.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownBrand2() {
  let dropMainContainer10 = document.querySelector(".dropMainContainer10");
  dropMainContainer10.style.display = "none";
}

function dropDownDesigner() {
  let dropMainContainer11 = document.querySelector(".dropMainContainer11");
  dropMainContainer11.style.display = "inherit";
  // alert("Im dropdown");
}
function dropDownDesigner2() {
  let dropMainContainer11 = document.querySelector(".dropMainContainer11");
  dropMainContainer11.style.display = "none";
}

/* end */

//load selected product
loadSelectedProduct();

//load navCount
loadNavCount();
