/*file: form.js */
/*Tìm kiếm các điểm đến, gửi form liên lạc */
const a= document.querySelector('.main__container-6__form')
        a.addEventListener('submit',function(e){
                e.preventDefault()
                alert('Gửi thành công')
        })

const b= document.querySelector('.main__container-1__form')
        b.addEventListener('submit',function(e){
                e.preventDefault()
                alert('Đang tìm kiếm...')
        })


    