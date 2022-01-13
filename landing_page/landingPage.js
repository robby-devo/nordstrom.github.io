let india = document.querySelector(".india");
let shipCross = document.querySelector(".shipCross");
india.addEventListener("click", shipDetails);
shipCross.addEventListener("click", shipDivClose);
let homeShipDiv = document.querySelector(".homeShipDiv");
// 
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
function shipDetails() {
    homeShipDiv.style.display = "inherit";
}

function shipDivClose() {
    homeShipDiv.style.display = "none";
}

let homeRedirect = document.getElementById("homeRedirect");
homeRedirect.addEventListener("click", redirectToHome);

function redirectToHome() {
    window.location.href = "landingPage.html";
}

function slideShow() {
    let slidebox1 = document.getElementById("carosol1");
    let slideContainer1 = document.createElement("div");
    slidebox1.append(slideContainer1);
    slideContainer1.setAttribute('id', "slides");

    let arr = ["https://n.nordstrommedia.com/id/e4969afd-c301-41a7-b55e-c115759a3983.png?h=200&w=1609",
               "https://n.nordstrommedia.com/id/28996ae5-713b-412d-9ee0-74ba0e9b9dc3.png?h=200&w=1609"
    ];
    let carosolImg = document.createElement("img");
    carosolImg.setAttribute("class", "carosolImg1")
    let i = 0;
    carosolImg.src = arr[0];
    slideContainer1.append(carosolImg);

    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }

        carosolImg.src = arr[i];
        i++;
    }, 1500);
}

slideShow();

function slideShow2() {
    let slidebox2 = document.getElementById("carosol2");
    let slideContainer2 = document.createElement("div");
    slidebox2.append(slideContainer2);
    slideContainer2.setAttribute("id", "slides2");

    let arr = [
        "https://n.nordstrommedia.com/id/560a4d67-0866-4982-8f29-d8e6924374d6.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/597390bd-9e50-4bff-be66-fc4329cbe39b.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/0cad90fd-2a34-401f-a841-35b8d874af94.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/b1147cfa-ea31-4ca7-ba97-0eddbf5e7192.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/5a37cf9c-99ac-4a5d-ae8d-851995cea70c.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/b334b085-dfa9-4e8c-808d-6e118a7b1a5c.jpeg?h=600&w=1608"
    ]
    let carosolImg2 = document.createElement("img");
    carosolImg2.setAttribute("class", "carosolImg2");
    let i = 0;
    carosolImg2.src = arr[0];
    slideContainer2.append(carosolImg2);

    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }

        carosolImg2.src = arr[i];
        i++;
    }, 1500);
}

slideShow2();

let catDiv1 = document.querySelector("#catDiv1");
catDiv1.addEventListener("click", shopByMen);

function shopByMen() {
    window.location.href = "../shop_by_category/shop_Category.html";
}


let annSale = document.querySelector("#annSale");
annSale.addEventListener("click", dropDown);
// annSale.addEventListener("mouseleave", dropDown2);

let women = document.getElementById("women");
women.addEventListener("click", dropDownWomen);
// women.addEventListener("mouseleave", dropDownWomen2);

let men = document.getElementById("men");
men.addEventListener("click", dropDownMen);
// men.addEventListener("mouseleave", dropDownMen2);

let kids = document.getElementById("kids");
kids.addEventListener("click", dropDownKids);
// kids.addEventListener("mouseleave", dropDownKids2);

let activeWear = document.getElementById("activeWear");
activeWear.addEventListener("click", dropDownWear);
// activeWear.addEventListener("mouseleave", dropDownWear2);

let home = document.getElementById("home");
home.addEventListener("click", dropDownHome);
// home.addEventListener("mouseleave", dropDownHome2);

let gifts = document.getElementById("gifts");
gifts.addEventListener("click", dropDownGifts);
// gifts.addEventListener("mouseleave", dropDownGifts2);

let beauty = document.getElementById("beauty");
beauty.addEventListener("click", dropDownBeauty);
// beauty.addEventListener("mouseleave", dropDownBeauty2);

let sale = document.getElementById("sale");
sale.addEventListener("click", dropDownSale);
// sale.addEventListener("mouseleave", dropDownSale2);

let designer = document.getElementById("designer");
designer.addEventListener("click", dropDownDesigner);
// designer.addEventListener("mouseleave", dropDownDesigner2);

let brand = document.getElementById("brands");
brand.addEventListener("click", dropDownBrand);
// brand.addEventListener("mouseleave", dropDownBrand2);

let closeDropDown = document.getElementById("closeDropDown");
closeDropDown.addEventListener("click", leaveDropDown2);

let closeDropDown2 = document.getElementById("closeDropDown2");
closeDropDown2.addEventListener("click", leaveDropDownWomen2);

let closeDropDown3 = document.getElementById("closeDropDown3");
closeDropDown3.addEventListener("click", leaveDropDownMen2);

let closeDropDown4 = document.getElementById("closeDropDown4");
closeDropDown4.addEventListener("click", leaveDropDownKids2);

let closeDropDown5 = document.getElementById("closeDropDown5");
closeDropDown5.addEventListener("click", leaveDropDownWear2);

let closeDropDown6 = document.getElementById("closeDropDown6");
closeDropDown6.addEventListener("click", leaveDropDownHome2);

let closeDropDown7 = document.getElementById("closeDropDown7");
closeDropDown7.addEventListener("click", leaveDropDownGifts2);

let closeDropDown8 = document.getElementById("closeDropDown8");
closeDropDown8.addEventListener("click", leaveDropDownBeauty2);

let closeDropDown9 = document.getElementById("closeDropDown9");
closeDropDown9.addEventListener("click", leaveDropDownSale2);

let closeDropDown10 = document.getElementById("closeDropDown10");
closeDropDown10.addEventListener("click", leaveDropDownBrand2);

let closeDropDown11 = document.getElementById("closeDropDown11");
closeDropDown11.addEventListener("click", leaveDropDownDesigner2);


function dropDown() {
    let dropMainContainer = document.querySelector(".dropMainContainer");
    dropMainContainer.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDown2() {
    let dropMainContainer = document.querySelector(".dropMainContainer");
    dropMainContainer.style.display = "none";
}

function dropDownWomen() {
    let dropMainContainer2 = document.querySelector(".dropMainContainer2");
    dropMainContainer2.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownWomen2() {
    let dropMainContainer2 = document.querySelector(".dropMainContainer2");
    dropMainContainer2.style.display = "none";
}

function dropDownMen() {
    let dropMainContainer3 = document.querySelector(".dropMainContainer3");
    dropMainContainer3.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownMen2() {
    let dropMainContainer3 = document.querySelector(".dropMainContainer3");
    dropMainContainer3.style.display = "none";
}

function dropDownKids() {
    let dropMainContainer4 = document.querySelector(".dropMainContainer4");
    dropMainContainer4.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownKids2() {
    let dropMainContainer4 = document.querySelector(".dropMainContainer4");
    dropMainContainer4.style.display = "none";
}

function dropDownWear() {
    let dropMainContainer5 = document.querySelector(".dropMainContainer5");
    dropMainContainer5.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownWear2() {
    let dropMainContainer5 = document.querySelector(".dropMainContainer5");
    dropMainContainer5.style.display = "none";
}

function dropDownHome() {
    let dropMainContainer6 = document.querySelector(".dropMainContainer6");
    dropMainContainer6.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownHome2() {
    let dropMainContainer6 = document.querySelector(".dropMainContainer6");
    dropMainContainer6.style.display = "none";
}

function dropDownGifts() {
    let dropMainContainer7 = document.querySelector(".dropMainContainer7");
    dropMainContainer7.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownGifts2() {
    let dropMainContainer7 = document.querySelector(".dropMainContainer7");
    dropMainContainer7.style.display = "none";
}

function dropDownBeauty() {
    let dropMainContainer8 = document.querySelector(".dropMainContainer8");
    dropMainContainer8.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownBeauty2() {
    let dropMainContainer8 = document.querySelector(".dropMainContainer8");
    dropMainContainer8.style.display = "none";
}

function dropDownSale() {
    let dropMainContainer9 = document.querySelector(".dropMainContainer9");
    dropMainContainer9.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownSale2() {
    let dropMainContainer9 = document.querySelector(".dropMainContainer9");
    dropMainContainer9.style.display = "none";
}

function dropDownBrand() {
    let dropMainContainer10 = document.querySelector(".dropMainContainer10");
    dropMainContainer10.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownBrand2() {
    let dropMainContainer10 = document.querySelector(".dropMainContainer10");
    dropMainContainer10.style.display = "none";
}

function dropDownDesigner() {
    let dropMainContainer11 = document.querySelector(".dropMainContainer11");
    dropMainContainer11.style.display = "inherit";
    // alert("Im dropdown");
}
function leaveDropDownDesigner2() {
    let dropMainContainer11 = document.querySelector(".dropMainContainer11");
    dropMainContainer11.style.display = "none";
}

let redirectMenPage = document.getElementById("redirectMenPage");
redirectMenPage.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage2 = document.getElementById("redirectMenPage2");
redirectMenPage2.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage3 = document.getElementById("redirectMenPage3");
redirectMenPage3.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage4 = document.getElementById("redirectMenPage4");
redirectMenPage4.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage5 = document.getElementById("redirectMenPage5");
redirectMenPage5.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage6 = document.getElementById("redirectMenPage6");
redirectMenPage6.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage7 = document.getElementById("redirectMenPage7");
redirectMenPage7.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage8 = document.getElementById("redirectMenPage8");
redirectMenPage8.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage9 = document.getElementById("redirectMenPage9");
redirectMenPage9.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage10 = document.getElementById("redirectMenPage10");
redirectMenPage10.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

let redirectMenPage11 = document.getElementById("redirectMenPage11");
redirectMenPage11.addEventListener("click", function () {
    window.location.href = "../shop_by_category/shop_Category.html";
})

//product dynamic functionality - neeraj
function productPage(id){
    /* stores id in local storage and updates selected value and redirects to product page*/

    //update value
    let selectedProduct = id;

    //store in local storage
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

    //redirect to product page
    window.location.href = "../products_page/products.html";
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
  function shoppingCart(){
    /* redirect to shopping cart */
    window.location.href = "../shopping_cart/shopping_cart.html";
  }
  loadNavCount();
  /* end */