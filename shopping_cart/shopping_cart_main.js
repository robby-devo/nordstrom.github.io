/* shopping cart functionality */
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
let metaCart = JSON.parse(localStorage.getItem("metaCart"));

//product images path
const PATH = "../products_page/";

function loadShoppingCart(){
    /* loads shopping cart items from local storage */

    //load cart count
    let cartCount = document.getElementById("cartCount");
    cartCount.innerHTML = metaCart.count;

    let cart = JSON.parse(localStorage.getItem("cart"));

    for(let i=0; i<cart.length; i++){
        appendCartItem(cart[i]);
    }

    //load total columns
    const subTotalP = document.getElementById("subTotal");
    const total = document.getElementById("total");
    subTotalP.innerHTML = `<b>&#8377; ${metaCart.total}</b>`;
    total.innerHTML = `<b>&#8377; ${metaCart.total}</b>`;
}

function appendCartItem(cartItem){
    /* appends cart items to front end */

    //parent div
    let parentDiv = document.getElementById("dynamicProductsDiv");
    
    //parent div 2
    let productDiv = document.createElement("div");
    productDiv.id = cartItem.prodObj.id; 
    productDiv.setAttribute("class", "shopBagProduct");

    //child elements

    //image div
    let imgDiv = document.createElement("div");
    imgDiv.style.width = "18%";
    imgDiv.style.height = "320px";

    //image
    let image = document.createElement("img");
    image.style.width = "80%";
    image.style.height = "180px";
    image.style.textAlign = "center";
    image.style.marginLeft = "10%";
    image.setAttribute("src", PATH+cartItem.prodObj.zoomImg);

    imgDiv.append(image);

    //description div
    let descDiv = document.createElement("div");
    descDiv.style.width = "40%";
    descDiv.style.height = "320px";

    //product name and brand
    let name = document.createElement("p");
    let brand = document.createElement("p");
    name.innerHTML = cartItem.prodObj.name;
    brand.innerHTML = cartItem.prodObj.brand;

    //delivery div - (parent:descDiv)
    let deliveryDiv = document.createElement("div");
    deliveryDiv.setAttribute("class", "deliveryDiv");
    deliveryDiv.style.marginTop = "40px";
    
    //deliveryDiv image
    let delvImage = document.createElement("img");
    delvImage.setAttribute("src","images/outline_local_shipping_black_24dp.png");

    //deliveryDiv child div 1
    let deliveryDivChild1 = document.createElement("div");
    let delvP = document.createElement("p");
    delvP.style.marginTop = "0px";
    delvP.style.fontSize = "15px";
    delvP.innerHTML = "Delivery";
    let delvP2 = document.createElement("p");
    delvP2.style.marginTop = "0px";
    delvP2.style.fontSize = "15px";
    delvP2.innerHTML = "You can expect delivery in 2-3 business days.";
    delvP2.style.color = "rgb(109, 109, 109)";

    deliveryDivChild1.append(delvP, delvP2);
    deliveryDiv.append(delvImage, deliveryDivChild1);

    //delivery div 2 - (parent:descDiv)
    let deliveryDiv2 = document.createElement("div");
    deliveryDiv2.setAttribute("class", "deliveryDiv");
    deliveryDiv2.style.marginTop = "40px";

    //deliveryDiv image
    let delvImage2 = document.createElement("img");
    delvImage2.setAttribute("src","images/outline_location_on_black_24dp.png");

    //deliveryDiv child div 1
    let deliveryDivChild2 = document.createElement("div");
    let delvP1 = document.createElement("p");
    delvP1.style.marginTop = "0px";
    delvP1.style.fontSize = "15px";
    delvP1.innerHTML = "Pickup";
    let delvP22 = document.createElement("p");
    delvP22.style.marginTop = "0px";
    delvP22.style.fontSize = "15px";
    delvP22.style.color = "rgb(109, 109, 109)";
    delvP22.innerHTML = "Available";

    deliveryDivChild2.append(delvP1, delvP22);
    deliveryDiv2.append(delvImage2, deliveryDivChild2);

    //remove button div
    let rmvBtnDiv = document.createElement("div");
    rmvBtnDiv.setAttribute("class","removeButton");
    let rmvBtn = document.createElement("button");
    let saveBtn = document.createElement("button");
    saveBtn.style.margin = "10px";
    rmvBtn.innerHTML = "Remove";
    rmvBtn.addEventListener("click", () => {
        removeCartItem(cartItem.prodObj.id);
    });
    saveBtn.innerHTML = "Save for later";

    rmvBtnDiv.append(rmvBtn, saveBtn);

    //finally add to desc div
    descDiv.append(name, brand, deliveryDiv, deliveryDiv2, rmvBtnDiv);

    //qty div
    let qtyDiv = document.createElement("div");
    qtyDiv.style.width = "10%";
    qtyDiv.style.height = "10%";
    qtyDiv.style.justifyContent = "center";
    qtyDiv.style.alignItems = "center";
    qtyDiv.style.display = "flex";
    let qtyP = document.createElement("p");
    qtyP.style.margin = "10px";
    qtyP.innerHTML = "Qty";
    let qty = document.createElement("select");
    let opt = document.createElement("option");
    //already selected qty
    opt.value = cartItem.qty;
    opt.innerHTML = cartItem.qty;
    let opt1 = document.createElement("option");
    opt1.value = 1;
    opt1.innerHTML = "1";
    let opt2 = document.createElement("option");
    opt2.value = 2;
    opt2.innerHTML = "2";
    let opt3 = document.createElement("option");
    opt3.value = 3;
    opt3.innerHTML = "3";
    let opt4 = document.createElement("option");
    opt4.value = 4;
    opt4.innerHTML = "4";    
    qty.append(opt, opt1, opt2, opt3, opt4);
    qtyDiv.append(qtyP, qty);

    //sub total div
    let subDiv = document.createElement("div");
    subDiv.setAttribute("class","bagProdCost");
    let subTotal = document.createElement("p");
    subTotal.innerHTML = "&#8377;"+" "+cartItem.subTotal;
    subDiv.append(subTotal);

    //lastly add everything to product div
    productDiv.append(imgDiv, descDiv, qtyDiv, subDiv);

    //append product div to parent div
    parentDiv.append(productDiv);

}
function removeCartItem(productId){
    /* remove cart item from front end and local storage */
    showModal();
    document.getElementById("modalYesBtn").addEventListener("click", () => {
        //yes delete
        //remove from localStorage
        let cart = JSON.parse(localStorage.getItem("cart"));

        for(let i=0; i<cart.length; i++){
            if(cart[i].prodObj.id == productId){
                //deduce subtotal and count from meta cart
                metaCart.count -= cart[i].qty;
                metaCart.total -= cart[i].subTotal;
                //remove cart item
                cart.splice(i,1);
            }
        }

        //save to storage
        localStorage.setItem("cart", JSON.stringify(cart));
        //save to storage
        localStorage.setItem("metaCart", JSON.stringify(metaCart));   

        //hide modal
        hideModal();

        //reload page
        window.location.reload();
    });

    document.getElementById("modalNoBtn").addEventListener("click", () => {
        //dont delete
        //hide modal
        hideModal();
    });

}

function showModal(){
    /* shows Y/N modal and returns response */
    const modal = document.getElementById("yesNoModal");
    modal.style.visibility = "visible";    
}
function hideModal(){
    /* hide div after user clicks on close */
    const modal = document.getElementById("yesNoModal");
    modal.style.visibility = "hidden";
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
  loadNavCount();
  /* end */
/* checkout page */
function checkOut(){
/* redirect user to checkout page if user is logged in */
window.location.href = "../checkout_page/checkout.html";
}
/* end */
loadShoppingCart();

let homeRedirect = document.getElementById("homeRedirect");
homeRedirect.addEventListener("click", redirectToHome);

function redirectToHome() {
    window.location.href = "../landing_page/landingPage.html";
}