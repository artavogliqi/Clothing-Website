// ================================= HEADER =================================
const head = `
    <div class="logo">
        <p>MY<b>SITE</b></p>
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
  <p class="quote">Quote</p>
  <div>
    <ul>
      <li><h3>SHOP</h3></li>
      <li><a href="">For Men</a></li>
      <li><a href="">For Women</a></li>
      <li><a href="">For Kids</a></li>
    </ul>
    <ul>
      <li><h3>COMPANY</h3></li>
      <li><a href="">Login</a></li>
      <li><a href="">Register</a></li>
      <li><a href="">Wishlist</a></li>
    </ul>
    <ul>
      <li><h3>ADDRESS</h3></li>
      <li>Ferizaj, Kosovo</li>
      <li>04* *** ***</li>
      <li>mail@gmail.com</li>
    </ul>
  </div>
  <br>
  <p class="copy"><b>MYSITE</b> &copy; 2021</p>
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
