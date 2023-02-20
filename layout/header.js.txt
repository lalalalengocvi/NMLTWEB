/*file: header.js
student: Le Ngoc Vi, vib1906610@student.ctu.edu.vn */
let header = document.querySelector('.header');
header.innerHTML = `
<div class="header__topbar">
<div class="grid wide">
  <div class="header__topbar__container">
    <div class="row">
      <div class="l-6 m-8 c-8">
        <div class="header__topbar__container--contacts">
          <a href="#"><i class="fab fa-pinterest-p"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="l-6 m-4 c-4">
        <ul class="header__topbar__container--register">
          <a href="dangnhap.html">
            <li>Đăng nhập</li>
          </a>
          <a href="#">
            <li>|</li>
          </a>
          <a href="dangki.html">
            <li>Đăng kí</li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
<nav class="header__nav">
<div class="header__nav__container">
  <div class="grid wide">
    <div class="row">
      <div class="l-3 m-6 c-8">
        <a href="trangchu.html">
          <div class="header__nav__container--logo">
            <img src="assets/images/logo.png" alt="" /> Trip
          </div>
        </a>
      </div>
      <div class="l-6 hide-on-tablet_mobile">
        <ul class="header__nav__container--list">
          <li><a href="trangchu.html">Trang chủ</a></li>
          <li><a href="gioithieu.html">Giới thiệu</a></li>
          <li><a href="dichvu.html">Dịch vụ</a></li>
          <li><a href="tintuc.html">Tin tức</a></li>
          <li><a href="lienhe.html">Liên hệ</a></li>
        </ul>
      </div>              
      <div class="l-3 m-6 c-4">
        <i class="fas fa-bars list-tablet-mobile" id="menu_open"></i>
        <div class="header__nav__container--search">
          <i class="fas fa-search" id="search"></i>
          <br />
          
          <form action='./timkiem.html' method='GET'> 
          <input type="text" name='value' placeholder="Nhập nội dung tìm kiếm..."  />
        
          </form> 
        </div>
      </div>
    </div>
  </div>
</div>
</nav>

<div class="header__menu">
<div class="header__menu__overlay"></div>
<div class="header__menu__body--content">
  <ul>
    <li><a href="trangchu.html">Trang chủ</a></li>
    <li><a href="gioithieu.html">Giới thiệu</a></li>
    <li><a href="dichvu.html">Dịch vụ</a></li>
    <li><a href="tintuc.html">Tin tức</a></li>
    <li><a href="lienhe.html">Liên hệ</a></li>
  </ul>
  <i class="fas fa-times" id="menu_close"></i>
</div>
</div>
<div class="scroll-top">
<i class="fas fa-arrow-up"></i>
</div>
`