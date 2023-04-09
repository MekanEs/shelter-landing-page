import { feelModal1,getPetsInfo } from "./index1.js"
let container = document.querySelector('.pets_slider')

feelModal1()
let Pets = getPetsInfo()
let putInfoToCard1 = (el)=>{
   
    const card = document.createElement('div')
   
    card.classList.add('slider_card1')
    const img = document.createElement('img')
    img.setAttribute('alt','card_img')
    img.setAttribute('src',('.'+el['imgpets']))
    const name = document.createElement('div')
    name.classList.add('pet_name')
    name.innerText = el['name']
    const button = document.createElement('button')
    button.classList.add('slider_card_btn')
    button.innerText = 'Learn more'
    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(button)
    
    return card
    }
    let generateIndex = (arr=[],arr2=[])=>{
        let i = Math.round(Math.random()*7)
        if(arr.includes(i)||arr2.includes(i)){
            return generateIndex(arr,arr2)
        }else{
            return i
        }
        }
       

        let fillArrays = ()=>{
let arr = []
while(arr.length<8){
   arr.push(generateIndex(arr)) 
}
return arr
        }
        let rand = (arr)=>{
            let random = Math.round(Math.random())
            if(random>1/2){
              return [...arr].reverse()
            }else{
              return arr
            }
            }
                    let PetsArr =[]
                    let petsList = ()=>{
                    let arr = fillArrays()
                   
            let first = arr.slice(0,3) 
            let sec = arr.slice(3,6)
            let last = arr.slice(-2) 
            for(let i=0;i<6;i++){
            let result = [...rand(first),...rand(sec),...rand(last)]
             PetsArr.push(...result)
            }}
       petsList()
   
let fillContainer = (start=0,end=8)=>{
    container.innerHTML=''
for(let i=start; i<end;i++){
    container.append(putInfoToCard1(Pets[PetsArr[i]]))
}
feelModal1()
}

let start = 0
let end =8
let step = 8
let pagesCount = PetsArr.length/step
console.log(PetsArr.length,step)
fillContainer(start,end)





let next = document.querySelector('.next')
next.addEventListener('click',()=>{
    container.innerHTML=''
start = start+step
end+=step
fillContainer(start,end)
disableBtns(prev,first,0)
disableBtns(last,next,PetsArr.length-step)
curPage.innerText = Math.round(end/(PetsArr.length/(pagesCount)))
})
let last = document.querySelector('.next_next')
last.addEventListener('click',()=>{
    container.innerHTML=''
    start =PetsArr.length-step
    end=PetsArr.length
    fillContainer(start,end)
    disableBtns(prev,first,0)
    disableBtns(last,next,PetsArr.length-step)
    curPage.innerText = Math.round(end/(PetsArr.length/(pagesCount)))
    })
let prev = document.querySelector('.prev')
prev.addEventListener('click',()=>{
    container.innerHTML=''
    start -=step
    end-=step
    fillContainer(start,end)
    disableBtns(prev,first,0)
disableBtns(last,next,PetsArr.length-step)
curPage.innerText = Math.round(end/(PetsArr.length/(pagesCount)))
    })
let first = document.querySelector('.prev_prev')
first.addEventListener('click',()=>{
    container.innerHTML=''
    start =0
    end=step
    fillContainer(start,end)
    disableBtns(prev,first,0)
    disableBtns(last,next,40)
    curPage.innerText = Math.round(end/(PetsArr.length/(pagesCount)))
    })
let curPage = document.querySelector('.curr')
curPage.innerText = Math.round(end/(PetsArr.length/(pagesCount)))
let disableBtns = (btn1,btn2,point)=>{

    if(start ===point){
        btn1.classList.add('disabled')
        btn1.setAttribute('disabled',true)
        btn1.classList.remove('page_btn')
        btn2.classList.add('disabled')
        btn2.setAttribute('disabled',true)
        btn2.classList.remove('page_btn')
    }
    else{
        btn1.classList.remove('disabled')
        btn1.classList.add('page_btn')
        btn2.classList.remove('disabled')
        btn2.classList.add('page_btn')
        btn1.removeAttribute('disabled')
        btn2.removeAttribute('disabled')
    }
}
disableBtns(prev,first,0)

    let curSize = window.innerWidth
   

let removeAll = ()=>{
    for(let i=0;i<step;i++){
        container.children[0].remove()
    }
}
let body = document.querySelector('.pets_body')
let width = window.innerWidth
window.addEventListener('resize',()=>{
if(window.innerWidth<1010&&curSize>1010){

curSize = window.innerWidth
removeAll()
start = 0
step = 6
 
    end =start+step

    pagesCount = PetsArr.length/step
    curPage.innerText = end/step
 fillContainer(start,end)
 disableBtns(prev,first,0)
 disableBtns(last,next,40)
}else
if(window.innerWidth>1010&&curSize<=1010){

    curSize = window.innerWidth
    removeAll()
    step = 8
 start =0
    end =start+step

    pagesCount = PetsArr.length/step
    curPage.innerText = end/step
     fillContainer(start,end)
     disableBtns(prev,first,0)
     disableBtns(last,next,40)
    }else
    if(window.innerWidth<700&&curSize>700){

        curSize = window.innerWidth
        removeAll()
        step = 3
        start =0
        end =start+step
    
        pagesCount = PetsArr.length/step
        curPage.innerText = end/step
         fillContainer(start,end)
         disableBtns(prev,first,0)
         disableBtns(last,next,40)
        }else
        if(window.innerWidth>700&&curSize<=700){
        
            curSize = window.innerWidth
            removeAll()
            step = 6
            start =0
            end =start+step
        
            pagesCount = PetsArr.length/step
            curPage.innerText = end/step
             fillContainer(start,end)
             disableBtns(prev,first,0)
             disableBtns(last,next,40)
            }

})

