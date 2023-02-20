/*File: timkiem.js
student: Nguyen Van Phuong, phuongb1909973@stuent.ctu.edu.vn */
        var noidungtk = []
        var content =document.getElementsByClassName('main__content-search')
        var search =window.location.search
          search=search.substring(search.indexOf('=')+1, search.length+1)   
        for(let i =0;i<search.length;i++){
            if(search[i]=='+'){
                noidungtk[i]=' '
                console.log(search[i])
            }
            else{
                noidungtk[i]=search[i]

            }

        }
      
        noidungtk =noidungtk.toString()
        noidungtk=noidungtk.replace(/,/g,'')            
          
        
        content[0].innerHTML=noidungtk 
