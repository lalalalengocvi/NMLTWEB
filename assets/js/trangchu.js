/*File: trangchu.js
student: Nguyen Van Phuong, phuongb1909973@stuent.ctu.edu.vn */
/* Tạo hiệu ứng cho phần main__image thảy đổi hình ảnh liên tục   */
       
window.onload = function(){
      var href= document.getElementsByClassName('main__image')
      var i=0;
      const change = ()=>{
            if(i==0){
                  href[0].style.backgroundImage='url("../assets/images/vietnam1.jpg")'
                  i++;
            }
            else if(i==1){
                  href[0].style.backgroundImage='url("../assets/images/vietnam2.jpg")'
                  i++;
            }
            else{
                  href[0].style.backgroundImage='url("../assets/images/cho_noi.jpg")'
                  i=0
            }
      }
            
setInterval(change, 2000);   
       /* Phương thức setInterval (), được cung cấp trên giao diện Window và Worker,
        gọi nhiều lần một hàm hoặc thực thi một đoạn mã, với độ trễ thời gian cố định giữa mỗi lần gọi. */
}
      
      
         