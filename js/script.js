window.addEventListener("load", ()=>{
    document.querySelector("#loading-container").style.display = "none"
})

const btn_control = document.querySelector(".humberger")
const li = document.getElementsByTagName('li');
const max = li.length;
for(let i=0; i<max; i++){
    li[i].classList.add('fade')
}
btn_control.addEventListener("click", ()=>{
    document.querySelector("#container #header-contain .menu").classList.toggle("active");
    // Animation menu
    for(let i=0; i< li.length; i++){
        setTimeout(() => {
            li[i].classList.toggle('in')
        }, 100)
    }

})

//animation sign in
const sign_btn = document.querySelector("#home .text .sign-in button");
sign_btn.addEventListener("click", ()=>{
    runSign_in()
    sign_btn.disabled = true
})
function runSign_in(n=0){
    if(n==0){
        sign_btn.parentNode.classList.add("signed");
        // sign_btn.disabled = true;
        setTimeout(()=>{
            runSign_in(n+1);
        },400)
    }
    else if (n==1){
        sign_btn.innerHTML = '<span class="load"></span><p>Patientez</p>'
        setTimeout(()=>{
            runSign_in(n+1);
        },1400)
    }
    else{
        sign_btn.style.background = "#85ba7a"
        sign_btn.innerHTML = ' <i class="fa-solid fa-circle-check"></i><p>effectuez</p>'
    }
}

function chargeSign(n=0){
    if(n==0){
        setTimeout(()=>{
            chargeSign(n+1)
        },1000)
    }
    else {
        console.log("apparue...")
        sign_btn.parentNode.style.opacity = "1"
    }
}
chargeSign();

