// ================================= HEADER =================================
const head = `
    <div class="logo">
        <p>Dandelion</p>
    </div>
    <div class="nav">
        <ul>
            <li><a href="index.html"><i class="fas fa-home mr-3"></i><p class="hover">Home</p></a></li>
            <li><a href="login.html"><i class="fa fa-user-circle"></i><p class="hover">Log in</p></a></li>
            <li><i class="fa fa-search"></i><p class="active">
                <input type="text" name="search" id="search" placeholder=" Search...">
            </p></li>
        </ul>
    </div>
`;
window.addEventListener('DOMContentLoaded', () => {
  let headerbar = document.querySelector('div[role="headerbar"]');
  headerbar.innerHTML = head;
});





// ================================= FOOTER =================================
const footer = `
<div>
<form>      
<h3>Contact Us</h3>
  <input name="name" type="text" class="feedback-input" placeholder="Name" />
  <input name="email" type="text" class="feedback-input" placeholder="Email" /><br>
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea><br>
  <input type="submit" value="SUBMIT"/>
</form>
</div>
<div>
    <ul>
      <li><h3>SHOP</h3></li>
      <li><a href="men.html">For Men</a></li>
      <li><a href="women.html">For Women</a></li>
      <li><a href="kids.html">For Kids</a></li>
    </ul>
    <ul>
      <li><h3>COMPANY</h3></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="signup.html">Register</a></li>
      <li><a href="help.html">Help</a></li>
    </ul>
    <ul>
      <li><h3>ADDRESS</h3></li>
      <li>Ferizaj, Kosovo</li>
      <li><a href="tel:+38344123123">044 123 123</a></li>
      <li><a href="mailto:email@example.com">email@example.com</a></li>
    </ul>
  </div>
  <br>
  <p class="copy"><b>Dandelion</b> &copy; 2021</p>
`;
window.addEventListener('DOMContentLoaded', () => {
  let footerf = document.querySelector('div[role="footer"]');
  footerf.innerHTML = footer;
});



// ================================= HEADER STICKY =================================
var header = document.getElementById("header");
var sticky = header.offsetTop;

function nonScrollHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function() {
    nonScrollHeader();
}


//=================================SIGN UP VALIDATION===============================
var registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", function(event){
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

// var button = document.getElementById("button");
var nameMsg = document.getElementById("nameMsg")
var surnameMsg = document.getElementById("surnameMsg")
var usernameMsg = document.getElementById("usernameMsg")
var emailMsg = document.getElementById("emailMsg")
var passwordMsg = document.getElementById("passwordMsg")


var nameRegex = /^[A-Z][a-z]{2,11}/;
var nameRegex = /^[A-Z][a-z]{2,11}/;
var usernameRegex = /^[a-z]+\d?/;
var emailRegex = /^[A-Za-z]+\d+[._-]?\w+@[A-Za-z]+[-]?[A-Za-z]+\.[A-Za-z]{2,3}/;
var passwordRegex = /^[A-Za-z]+\d{8}/;


  if (name== "") {
    nameMsg.innerText="*Fill the name field!";
    event.preventDefault();
  }
  else{
    if(nameRegex.test(name)){
    }
    else {
      nameMsg.innerText = "First letter uppercase and 2-11 characters!";
      event.preventDefault();
    }
  }
  if (surname== "") {
    surnameMsg.innerText="*Fill the surname field!";
    event.preventDefault();
  }
  else{
    if(surnameRegex.test(surname)){
    }
    else {
      surnameMsg.innerText = "First letter uppercase and 2-11 characters!";
      event.preventDefault();
    }
  }
  if (username== "") {
    usernameMsg.innerText="*Fill the username field!";
    event.preventDefault();
  }
  else{
    if(usernameRegex.test(username)){
    }
    else {
      usernameMsg.innerText = "You should use lowercase letter!";
      event.preventDefault();
    }
  }
  if (email== "") {
    emailMsg.innerText="*Fill the email field!";
    event.preventDefault();
  }
  else{
    if(emailRegex.test(email)){
    }
    else {
      emailMsg.innerText = "First letter uppercase and 2-11 characters!";
      event.preventDefault();
    }
  }
  if (password== "") {
    passwordMsg.innerText="*Fill the password field!";
    event.preventDefault();
  }
  else{
    if(passwordRegex.test(password)){
    }
    else {
      passwordMsg.innerText = "*Password must contain 8 characters!";
      event.preventDefault();
    }
  }
});


//=================================LOGIN VALIDATION===============================

var loginButton = document.getElementById("login_btn");

var loginusernameMsg = document.getElementById("loginusernameMsg");
var loginpasswordMsg = document.getElementById("loginpasswordMsg");

var loginusernameRegex = /\w+[._-]?\w+/;
var loginpasswordRegex = /^[A-Z][a-z]{5}\d{3}[!*._-]{1}/;

loginButton.addEventListener("click", function (event) {
  var loginusername = document.getElementById("loginusername").value;
  var loginpassword = document.getElementById("loginpassword").value;

 
  if (loginusername == "" || loginusername == null) {
    loginusernameMsg.innerText = "* Please fill the username field";
    event.preventDefault();
  } else {
    if (loginusernameRegex.test(loginusername)) {
      loginusernameMsg.innerText = "";
    } else {
      loginusernameMsg.innerText =
        "* Please fill the username field correctly (ex. john123, 123john, john_john, john.123 etc)";
      event.preventDefault();
    }
  }

  if (loginpassword == "" || loginpassword == null) {
    loginpasswordMsg.innerText = "* Please fill the password field";
    event.preventDefault();
  } else {
    if (loginpasswordRegex.test(loginpassword)) {
      loginpasswordMsg.innerText = "";
    } else {
      loginpasswordMsg.innerText =
        "* Your password must contain  1 uppercase, 5 lowercase letters, 3 digits and 1 symbol [!*-_.]";
      event.preventDefault();
    }
  }
});
