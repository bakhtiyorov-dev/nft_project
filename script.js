const mobilMenu = document.getElementById("mobile-menu")
const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")


menuBtn.addEventListener("click",()=>{
    mobilMenu.classList.add("top-0")
    mobilMenu.classList.remove("top-[-100%]")
})

closeBtn.addEventListener("click",()=>{
    mobilMenu.classList.remove("top-0")
    mobilMenu.classList.add("top-[-100%]")
})