/* File: validation.js
student: Le Ngoc Vi,  vib1906610@student.ctu.edu.vn */

/*Đăng kí*/
const form1 = document.getElementById('form1'); /*Khai báo biến và lấy dữ liệu từ thẻ có id form1 */
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const container = document.querySelector('.container');
const anmtBox = document.querySelector('.box-animation');

function checkFirsname() { /*Hàm kiểm tra firstname */
    if (fname.value === '') { /* */
        errorMessage(fname, "Bạn không được để trống."); 
    } else {
        successMessage(fname); /* */
    }
}

function checkLastname() { /*Hàm kiểm tra lastname */
    if (lname.value === '') {
        errorMessage(lname, "Bạn không được để trống.");
    } else {
        successMessage(lname);
    }
}
function validateEmail(email) { /*Hàm kiểm tra email */
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(String(email).toLowerCase());
}

function checkEmail() { /*Hàm kiểm tra checkemail*/
    if (email.value === '') {
        errorMessage(email, "Bạn không được để trống.");
    } else if (!validateEmail(email.value)) {
        errorMessage(email, "Email không hợp lệ")
    } else {
        successMessage(email);
    }
}

fname.addEventListener('blur', checkFirsname, true); /*Kiểm tra sự kiện đưa vào là đúng và thoát khỏi đó */
lname.addEventListener('blur', checkLastname, true);
email.addEventListener('blur', checkEmail, true);


form1.addEventListener('submit', (evt) => { /*Kiểm tra hàm submit */
    evt.preventDefault();  /*làm cho sự kiện không xảy ra */
    alert('Thành công');
});

function errorMessage(pElement, message) {
    const formRow = pElement.parentElement.parentElement;

    if (formRow.classList.contains('success')) {
        formRow.classList.remove('success');
        formRow.classList.add('error');
    } else {
        formRow.classList.add('error');
    }
    formRow.querySelector('.message').textContent = message;
}

function successMessage(pElement) {
    const formRow = pElement.parentElement.parentElement;

    if (formRow.classList.contains('error')) {
        formRow.classList.remove('error');
        formRow.classList.add('success');
    } else {
        formRow.classList.add('success');
    }
}
/*Kiểm tra mật khẩu nhập vào có trùng khớp hay không */
var password = document.getElementById("password"),
onfirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Mật khẩu không trùng khớp");
    } else {
    confirm_password.setCustomValidity(''); /*Kiểm tra tính hợp lệ của mật khẩu */
    }
}

password.onchange = validatePassword; 
/*Sự kiện thay đổi xảy ra khi bạn rời khỏi trường nhập sau khi đã thay đổi giá trị của nó
. Nó không kích hoạt ngay lập tức khi người dùng thay đổi giá trị, chỉ khi họ hoàn thành, giá trị này được họ phát
 hiện bằng cách sử dụng bàn phím hoặc chuột để chọn một phần tử khác trên trang. */
confirm_password.onkeyup = validatePassword;
/*cho phép bạn thực hiện hành động trong khi người dùng đang nhập.*/


