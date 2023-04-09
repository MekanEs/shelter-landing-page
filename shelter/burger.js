
let Icon = document.querySelector('.burger_icon')
let Bg = document.querySelector('.burger_window')
let menu = document.querySelector('.nav_ul_burger')
let Html = document.querySelector('html')
let isActive =false

let openMenu =()=>{
    if(!isActive){
        Bg.style['display'] = 'block'
        menu.style['display'] = 'flex'
        Bg.classList.add('bgWindowActive')
        Html.classList.add('noscroll')
        setTimeout(() => {
            Icon.classList.add('open')
menu.classList.add('menu_active')

        }, 0);

isActive=true
    }else{
        Bg.classList.remove('bgWindowActive')
        Icon.classList.remove('open')
        menu.classList.remove('menu_active')
        isActive =false
        setTimeout(() => {
            Bg.style['display'] = 'none'
            menu.style['display'] = 'none'
        }, 400);
        Html.classList.remove('noscroll')
    }
}



Icon.addEventListener('click',()=>{
    openMenu()
})

Bg.addEventListener('click',(event)=>{
    if(isActive){
if(event.target!==menu){
    openMenu()
}
    }
})