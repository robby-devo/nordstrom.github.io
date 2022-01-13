/* dynamic nav cart count */
let metaCart = JSON.parse(localStorage.getItem("metaCart"));
let cart = JSON.parse(localStorage.getItem("cart"));
//product images path
const PATH = "../products_page/";
isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

function authenticateUser(){
  /* checks wether user is logged in or not */
  if(!isLoggedIn){
    window.location.href = "../login page/login.html";
  }
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

  function loadCheckoutCart(){
    /* appends product images to checkout page */
    
    //get div
    const imgDiv = document.getElementById("prodImg");

    //add images
    for(var i=0; i<cart.length; i++){
      const img = document.createElement("img");
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.margin = "5px";
      img.setAttribute("src", PATH + cart[i].prodObj.zoomImg);
      imgDiv.append(img);
    }

    //update total columns
    //load total columns
    const subTotalP = document.getElementById("subTotal");
    const total = document.getElementById("total");
    subTotalP.innerHTML = `<b>&#8377; ${metaCart.total}</b>`;
    total.innerHTML = `<b>&#8377; ${metaCart.total}</b>`;    
  
  }
  function success(){
    /* redirect to thank you page */
    window.location.href = "../success_page/success.html";
  }

  function shoppingCart(){
    /* redirect to shopping cart */
    window.location.href = "../shopping_cart/shopping_cart.html";
  }  
  authenticateUser();
  loadCheckoutCart();
  //load navCount
loadNavCount();
/* end */
  