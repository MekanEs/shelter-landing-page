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

const config = {  childList: true, subtree: true };

const callback = (mutationList, observer) => {
  console.log(mutationList)
        feelModal()
     
      
  }

  const observer = new MutationObserver(callback)
  observer.observe(sliderInside, config)

let fillhtml = (pos=1000)=>{
    currentCards.reduce((acc,el)=>{
     
        let cardToAppend = allCardsInHtml[el]
        cardToAppend.style['transform']=`translateX(${pos}px)`
        sliderInside.append(cardToAppend)
    },0)
console.log('fillHtml')
}
let deletehtml = (pos = 1000)=>{
    console.log(sliderInside.children.length)
for(let i=0;i<sliderInside.children.length;i++){
    sliderInside.children[i].style['transform'] = `translateX(${pos}px)`
    
}
setTimeout(()=>sliderInside.innerHTML='',400)
console.log('deleteHtml')
}
let translateCur = ()=>{
    for(let i=0;i<sliderInside.children.length;i++){
        sliderInside.children[i].style['transform'] = `translateX(0px)`
        
    }
}

fillhtml(0)
nextBtn.addEventListener('click',()=>{

    let makeNew = []
    fillArrWithIndexes(makeNew,nextCards)
    pastCards = [...currentCards]
    currentCards = [...nextCards]
    nextCards = [...makeNew]
    deletehtml(-1000)
    setTimeout(() => {
        fillhtml(2000) 
    }, 405); 
   setTimeout(() => {
    translateCur()
   }, 430);
})

prevBtn.addEventListener('click',()=>{

    let makeNew = []
    fillArrWithIndexes(makeNew,pastCards)
    nextCards = [...currentCards]
    currentCards = [...pastCards]
    pastCards = [...makeNew]
 
    deletehtml(1000)
    setTimeout(() => {
        fillhtml(-2000) 
    }, 405); 
    setTimeout(() => {
        translateCur()
       }, 430);
})
