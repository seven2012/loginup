
sign_login.onclick = function(){
    login_page.removeAttribute('hidden')
    signpage.style.display='none';

    let wrap = document.querySelector('.wrapper')
    wrap.className = 'change'    
    
}



sign_logup.onclick = function(){
    logup_page.removeAttribute('hidden')
    signpage.style.display='none'

   let wrap = document.querySelector('.wrapper')
    wrap.className = 'change'
    
}


let logupHref = document.querySelector('.logup_page a')
   logupHref.onclick = function(){
       signpage.style.display='block';
       logup_page.style.display = 'none'
       
       window.location.reload()
   }
   
let loginHref = document.querySelector('.tologup')
    loginHref.onclick = function(){
        signpage.style.display='block';
        login_page.style.display = 'none'
       
       window.location.reload()
    }
