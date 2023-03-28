const dark = document.querySelector('#darkMode');
dark.addEventListener("click",function(){
    const body = document.querySelector("body");
    body.classList.toggle("active");
})