/*file: main.js */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Trở về đầu trang
var scrollTop = () => {
    var header = $(".header");
    header.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};

var scrollBtn = $(".scroll-top");//Gán biến scrollBtn có giá trị là phần tử đầu tiên có class = scroll-top
scrollBtn.addEventListener("click", scrollTop);//Lắng nghe sự kiện click trên biến scrollBtn, gọi hàm scrollTop
window.addEventListener("scroll", scrollBtnDisplay);//Lắng nghe sự kiện click trên đối tượng window, gọi hàm scrollBtnDisplay

function scrollBtnDisplay() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Tiêu đề liên kết hoạt động
var listLink = location.href;//Gán biến listLink bằng đường dẫn hiện tại
var listItem = $$(".header__nav__container--list a");//Gán biến listItem có giá trị là 1 mảng các phần tử có bộ chọn như bên
var listLength = listItem.length;//Gán biến listLength có giá trị là độ dài của mảng listItem

var i = 0;
for (i; i < listLength; i++) {
    if (listItem[i].href === listLink) {
        listItem[i].className = "active";//Gán class cho phần tử listItem[i] là active
    }
}

var links = location.href;//Gán biến links bằng đường dẫn hiện tại
var items = $$(".header__menu__body--content a");//Gán biến items có giá trị là 1 mảng các phần tử có bộ chọn như bên
var listslength = items.length;//Gán biến listslength có giá trị là độ dài của mảng items


var j = 0;
for (j; j < listLength; j++) {
    if (items[j].href === links) {
        items[j].className = "active";//Gán class cho phần tử listItem[i] là active
    
    }
}

// các tiêu đề chọn
var headerSticky = $(".header__nav");//Gán biến headerSticky có giá trị là phần tử đầu tiên có class = header__nav
var topBar = $(".header__topbar");//Gán biến topBar có giá trị là phần tử đầu tiên có class = header__topbar
window.addEventListener("scroll", scrollFunction);  //Lắng nghe sự kiện scroll trên đối tượng window, gọi hàm scrollFunction 

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerSticky.classList.add("scroll");//class của giá trị của biến headerSticky cộng thêm 'scroll'
        topBar.classList.add("hide");//class của giá trị của biến topBar cộng thêm 'hide'
    } else {
        headerSticky.classList.remove("scroll");//class của giá trị của biến headerSticky gỡ bỏ 'scroll'
        topBar.classList.remove("hide");//class của giá trị của biến topBar gỡ bỏ 'hide'
    }
}

// Nút tìm kiếm
var searchIcon = $("#search");//Gán biến searchIcon có giá trị là phần tử có id = search
var input = $(".header__nav__container--search input");//Gán biến input có giá trị là phần tử đầu tiên có bộ chọn như bên

searchIcon.onclick = function() {
    input.classList.toggle("active");//class của giá trị của biến input cộng thêm 'active' nếu nó chưa có hoặc loại bỏ 'active' nếu nó có rồi
};

// Liên kết tới các hoạt động
var links = $$(".header__nav__container--list li");
var add = function() {
    $(".header__nav__container--list li.active").classList.remove("active");
    this.classList.add("active");//class của giá trị của biến của chủ thể gọi hàm add cộng thêm 'active'
};
links.forEach((link) => {
    link.addEventListener("click", add);
});
// Hoạt động tìm kiếm
var tabs = $$(".search__container__tab");

tabs.forEach((tab) => {
    tab.onclick = function() {
        $(".search__container__tab.active").classList.remove("active");
        this.classList.add("active");
    };
});

//Tiêu đề thanh menu

var box = $(".header__menu__overlay");//Gán biến box có giá trị là phần tử có class = header__menu__overlay
var boxBody = $(".header__menu__body--content");//Gán biến boxBody có giá trị là phần tử có class = header__menu__body--content
var open = $("#menu_open");//Gán biến open có giá trị là phần tử có id = menu_open
var close = $("#menu_close");//Gán biến open có giá trị là phần tử có id = menu_close

open.onclick = function() { //open nhận được sự kiện onclick thì sẽ gọi hàm 
    box.style.display = "block";//Gán giá trị display của giá trị của phần tử box bằng 'block'
    boxBody.classList.add("open");//class của giá trị của biến boxBody cộng thêm 'open'
};
close.onclick = function() {//close nhận được sự kiện onclick thì sẽ gọi hàm 
    box.style.display = "none";//Gán giá trị display của giá trị của phần tử box bằng 'none'
    boxBody.classList.remove("open");//class của giá trị của biến boxBody gỡ bỏ 'open'
};

