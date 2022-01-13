/* dynamic cart data */
let metaCart = JSON.parse(localStorage.getItem("metaCart"));
let cart = JSON.parse(localStorage.getItem("cart"));

let continueShopping = document.getElementById("continueShopping");
continueShopping.addEventListener("click", goToHomePage);

function goToHomePage() {
    window.location.href = "../landing_page/landingPage.html";
}

function processOrder(){
    let newOrder = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
    newOrder.then(() => {
        //remove cart items
        const div = document.getElementById("successContainer");
        const div2 = document.getElementById("processingContainer");
        div2.remove();
        div.style.visibility = "visible";
        emptyCart();
    });
}
function emptyCart(){
    /* removes all cart items */

    localStorage.removeItem("metaCart");
    localStorage.removeItem("cart");

    //reload page
    setTimeout(() => {
        window.location.href = "../landing_page/landingPage.html";  
    }, 3000)  
}
processOrder();
