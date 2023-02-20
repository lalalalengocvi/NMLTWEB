/*file: dangnhap.js */
var a =document.forms
var b =document.links
var c =document.anchors
console.log(c[0])
console.log(b)
console.log(a[0])
function validateform(evt) {
    evt.preventDefault();
var email = document.form1.email.value; /*Khai báo biến và lấy dữ liệu từ trong form 1 có name email */
var password = document.form1.password.value;

if (email == null || email == "") {  /*Kiểm tra dữ liệu có được nhập vào hay chưa */
  alert("Email không được để trống!");
return false;
}
else if (password.length < 6) {     /*Kiểm tra password có nhỏ hơn 6 kí tự không */
  alert("Mật khẩu ít nhất 6 ký tự");
return false;
}
else
  alert ("Thành công");
return true;
}