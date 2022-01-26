let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".btn.cancel")
let acceptCookieBtn = document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", fucntion(){
     cookieModal.classList.remove("active")                            
})
acceptCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAcepted = localStorage.getItem("cookieAccept")
    if (cookieAcepted != "yes"){
    cookieModal.classList.add("active")   
    }
},2000)