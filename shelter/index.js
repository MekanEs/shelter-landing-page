
let infoArr = [
    {
      "name": "Jennifer",
      "img": "./assets/pets_images/modal/jennifer.png",
      "imgpets": "./assets/pets_images/pets/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "./assets/pets_images/modal/sophia.png",
      "imgpets": "./assets/pets_images/pets/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "./assets/pets_images/modal/woody.png",
      "imgpets": "./assets/pets_images/pets/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "./assets/pets_images/modal/scarlett.png",
      "imgpets": "./assets/pets_images/pets/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "./assets/pets_images/modal/katrine.png",
      "imgpets": "./assets/pets_images/pets/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "./assets/pets_images/modal/timmy.png",
      "imgpets": "./assets/pets_images/pets/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "./assets/pets_images/modal/freddie.png",
      "imgpets": "./assets/pets_images/pets/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "./assets/pets_images/modal/charly.png",
      "imgpets": "./assets/pets_images/pets/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
  export function getPetsInfo (){
  return infoArr
}
export function feelModal (){
  
let cardArr = document.querySelectorAll('.slider_card')
let popUp = document.querySelector('.popUp')
let Html = document.querySelector('html')
let modalWindow = document.querySelector('.modal')
let modal_petImg = document.querySelector('.modal_petImg')
let modal_pets_petImg = document.querySelector('.modal_pets_petImg')
let modal_txt_content = document.querySelector('.modal_txt')
let modal_header2 = document.querySelector('.modal_header2')
let modal_header3 =document.querySelector('.modal_header3')
let modal_info = document.querySelector('.modal_info')
let modal_list=document.querySelector('.modal_list')
let isPets = document.querySelector('.pets_body')
let modalBorder = document.querySelector('.modalWindow')

let fillModal = (el)=>{
    let res 
infoArr.reduce((acc,el1)=>{
        if(el1["name"]===el.querySelector('.pet_name').innerHTML){
            res = el1
        }
    },[])
   return res
}

cardArr.forEach((el)=>{
    return el.addEventListener('click',(e)=>{
      let innerTxtCnt = '<h2>`${petInfo.name}`</h2>'
            
        popUp.classList.remove('inactive_popup')
        Html.classList.add('noscroll')
        let petInfo = fillModal(el)
        modal_header2.innerHTML = ''
        modal_header2.append(`${petInfo.name}`)
        modal_header3.innerHTML = ''
        modal_header3.append(`${petInfo.type} - ${petInfo.breed}`)
        modal_info.innerHTML = ''
        modal_info.append(`${petInfo.description}`)
        modal_list.innerHTML =''
        modal_list.innerHTML =`<li><span class='list_h'>Age: </span><span>${petInfo.age}</span></li>
        <li><span class='list_h'>Inoculations: </span><span>${petInfo.inoculations.join(', ')}</span></li>
        <li><span class='list_h'>Diseases: </span><span>${petInfo.diseases.join(', ')}</span></li>
        <li><span class='list_h'>Parasites: </span><span>${petInfo.parasites.join(', ')}</span></li>`
        modal_petImg.setAttribute('src',petInfo['img'])
        if(isPets){
          modal_pets_petImg.setAttribute('src',`.${petInfo['img']}`)
        }
      
    })
})
let closing = ()=>{
  popUp.classList.add('inactive_popup')
  Html.classList.remove('noscroll')
  modal_header2.innerHTML =''
  modal_header3.innerHTML =''
  modal_info.innerHTML=''
  modal_list.innerHTML =''
}
let closeBtn = document.querySelector('.close')
closeBtn.addEventListener('click',()=>{
    closing()
})

popUp.addEventListener('click',(e)=>{

    if(e.target!==modalWindow&&e.target===popUp||e.target===modalBorder){
       closing()
    }
})}