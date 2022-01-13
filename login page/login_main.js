localStorage.setItem("isLoggedIn", JSON.stringify(false))
function writeToStorage() {
    var email = document.getElementById("input1").value
    var arr = JSON.parse(localStorage.getItem("allEmails"));
    var flag = false;
    console.log("first");
    if(arr == null) {
        arr = [];
        localStorage.setItem("currentEmail", JSON.stringify(email));
        goToSignUp();
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].curEmail == email) {
            flag = true;
            console.log("second")
        }
    }
      localStorage.setItem("currentEmail", JSON.stringify(email));
     if (flag == true) {
        
         console.log("third")
         goToLogin();
    }
     else {
         goToSignUp()
     }
}
/* end universal */



/* index page */
function goToSignUp(){
    window.location.href = "login1.html";
}
function goToLogin(){
    window.location.href = "login3.html";
}
/* end index page */

function loggedIn() {
    var fName = document.getElementById("fName").value
    var lName = document.getElementById("lName").value
    var pwd = document.getElementById("pwd").value
    var curEmail = JSON.parse(localStorage.getItem("currentEmail"))
    var allEmail = JSON.parse(localStorage.getItem("allEmails"))
    var payload = {
        fName,lName,pwd,curEmail
    }
    if (allEmail == null) {
        var allEmail = [payload]
    }
    else {
        allEmail.push(payload)
    }
    localStorage.setItem("allEmails", JSON.stringify(allEmail))
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
    window.location.href = "login2.html";
}

function home() {
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
    window.location.href = "../landing_page/landingPage.html";
    
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

// Redirection to Home page

let homeRedirect = document.getElementById("homeRedirect");
homeRedirect.addEventListener("click", redirectToHome);

function redirectToHome() {
    window.location.href = "..landing_page/landingPage.html";
}