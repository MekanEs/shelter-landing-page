import  {getPetsInfo}  from "./index.js";
import {feelModal}  from "./index.js";
let PetsInfo = [...getPetsInfo()]
let sliderContainer = document.querySelector('.slider_main')
let documentwidth = document.querySelector('body').offsetWidth
let body = document.querySelector('html')
let nextBtn = document.querySelector('.next_btn')
let prevBtn = document.querySelector('.prev_btn')
let sliderInside = document.querySelector('.sliderinsideCont')
let putInfoToCard = (el,forward=0)=>{
   
const card = document.createElement('div')
card.classList.add('slider_card')
if(forward===1){
    card.style['transform']  = 'translate(-2000px)' 
    card.style['width']   =   '0' 
}
const img = document.createElement('img')
img.setAttribute('alt','card_img')
img.setAttribute('src',el['imgpets'])
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
let CountOfvisibleCards 

if(documentwidth>1110){
    CountOfvisibleCards = 3
}if(documentwidth<1110&&documentwidth>730){
    CountOfvisibleCards = 2
}if(documentwidth<730){
    CountOfvisibleCards = 1
}

let allCardsInHtml =[]
PetsInfo.map((el)=>{
    allCardsInHtml.push(putInfoToCard(el))
})

let generateIndex = (arr=[],arr2=[])=>{
let i = Math.round(Math.random()*7)
if(arr.includes(i)||arr2.includes(i)){
    return generateIndex(arr,arr2)
}else{
    return i
}
}


let fillArrWithIndexes = (arr1,arr2=[])=>{

    for(let i=0;i<3;i++){
        let i = generateIndex(arr1,arr2)
      arr1.push(i)
    }
    return arr1
}


let pastCards = []
let currentCards = []
let nextCards = []
fillArrWithIndexes(pastCards)
fillArrWithIndexes(currentCards,pastCards)
fillArrWithIndexes(nextCards,currentCards)



let fillhtml = (pos=1000,vis ='flex')=>{
    
    currentCards.reduce((acc,el)=>{
     
        let cardToAppend = allCardsInHtml[el]
        cardToAppend.style['transform']=`translateX(${pos}px)`
        cardToAppend.style['display']=`${vis}`
        sliderInside.append(cardToAppend)
    },0)
    

}


let fillhtmlStart = (pos=1000,vis ='flex')=>{
    [...currentCards].reverse().forEach((el)=>{
        let cardToAppend = allCardsInHtml[el]
        cardToAppend.style['transform']=`translateX(${pos}px)`
        cardToAppend.style['display']=`${vis}`
        sliderInside.insertAdjacentElement("afterbegin",cardToAppend)
  })
       
     
     
      
    }
   

let translate =(pos)=>{
   
   sliderInside.style['transform']=`translateX(${pos}px)`
    for(let i=sliderInside.children.length-3;i<sliderInside.children.length;i++){
        sliderInside.children[i].style['display'] = 'flex'
        sliderInside.children[i].classList.add('transition_None')
    sliderInside.children[i].style['transform'] = `translateX(0px)`
    }
}
let translateStart =(pos)=>{
   
    sliderInside.style['transform']=`translateX(${pos}px)`
     for(let i=0;i<sliderInside.children.length;i++){
         sliderInside.children[i].style['display'] = 'flex'
         sliderInside.children[i].classList.add('transition_None')
     sliderInside.children[i].style['transform'] = `translateX(0px)`
     }
 }
let deletehtml = (pos = 1080)=>{
    sliderInside.classList.add('transition_None')
    sliderInside.style['transform']=`translateX(0px)`

for(let i=0;i<3;i++){
    sliderInside.children[0].remove()
}
for(let i=0;i<3;i++){
    sliderInside.children[i].classList.remove('transition_None')
}
setTimeout(()=>{
    sliderInside.classList.remove('transition_None')
},200)

}
let deletehtmlStart = (pos = 1080)=>{
    sliderInside.classList.add('transition_None')
    sliderInside.style['transform']=`translateX(0px)`

for(let i=2;i<=sliderInside.children.length;i++){
  
    sliderInside.lastChild.remove()
}
for(let i=sliderInside.children.length-3;i<sliderInside.children.length;i++){
    sliderInside.children[i].classList.remove('transition_None')
}
setTimeout(()=>{
    sliderInside.classList.remove('transition_None')
},200)

}





fillhtml(0)
nextBtn.addEventListener('click',()=>{

    let makeNew = []
    fillArrWithIndexes(makeNew,nextCards)
    pastCards = [...currentCards]
    currentCards = [...nextCards]
    nextCards = [...makeNew]
    fillhtml(1080,'none')
    translate(-1080)
 setTimeout(() => {
        deletehtml()
    }, 200);
   feelModal()
})

prevBtn.addEventListener('click',()=>{

    let makeNew = []
    fillArrWithIndexes(makeNew,pastCards)
    nextCards = [...currentCards]
    currentCards = [...pastCards]
    pastCards = [...makeNew]
  
    fillhtmlStart(-1080,'none')
    translateStart(1080)
 setTimeout(() => {
    deletehtmlStart()
    }, 200);
    feelModal()
})
