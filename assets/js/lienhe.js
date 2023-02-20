/*file: lienhe.js */
/*gửi form liên hệ */
const c= document.querySelector('.container__contact__form')
        console.log(c);
        c.addEventListener('submit',function(e){
           
             e.preventDefault()
            alert('Gửi thành công')
    })