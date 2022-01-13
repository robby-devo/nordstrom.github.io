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
