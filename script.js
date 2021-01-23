let menu;
let icon;

window.addEventListener('load', ()=>{
    flag = true;
    menu = document.querySelector(".menu");
    icon = document.querySelector(".fas");
})

function toggle(){
    if(flag){
        menu.style.top = "0";
        icon.style.right = "100px";
        icon.className = "fas fa-times fa-2x"
        flag = !flag;
    }
    else{
        menu.style.top = "-380px";
        icon.style.right = "0";
        icon.className = "fas fa-bars fa-2x"
        flag = !flag;
    }
}