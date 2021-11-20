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
