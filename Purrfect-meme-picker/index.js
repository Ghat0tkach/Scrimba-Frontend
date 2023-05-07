import { catsData } from '/data.js';


const memeModalInner=document.getElementById('meme-modal-inner')
const memeModal=document.getElementById('meme-modal')
const emotionradios=document.getElementById('emotion-radios')
const imgBtn=document.getElementById('get-image-btn')
const GifOnly=document.getElementById('gifs-only-option')
const closeBtn=document.getElementById('meme-modal-close-btn')

emotionradios.addEventListener('change',highlightCheckedOption)

imgBtn.addEventListener('click',renderCatobject)

closeBtn.addEventListener('click',function(){
    memeModal.style.display='none'
})
function getSingleCatObject(){
    const catsArray=getMatchingCatsArray()
    if(catsArray.length === 1){
     return catsArray[0]
    }
  else{
     const randomnumber =Math.floor(Math.random() * catsArray.length)
    return catsArray[randomnumber]
 }
    
}

function renderCatobject(){
  const catObject =getSingleCatObject()
  memeModalInner.innerHTML = `
  <img 
  class="cat-img" 
  src="./images/${catObject.image}"
  alt="${catObject.alt}"
  >
  `
  
  memeModal.style.display='flex'
}


//function to click radio input and change the color
function highlightCheckedOption(event){
    const productArrays=document.getElementsByClassName('radio')
 //iterating and removing highlights from every button when you click
    for(let product of productArrays){
        product.classList.remove('highlight')
    }
    //after iteration adding the desired color
  document.getElementById(event.target.id).parentElement.classList.add("highlight")
   
}
//function get-img lene ke liye taki jb click kre to img aye

function getMatchingCatsArray(){
     if(document.querySelector('input[type="radio"]:checked')){
    const selectedEmotion=document.querySelector('input[type="radio"]:checked').value //queryselecter pure document me jhan-been krke use kiye,selected emotion ke liye
    const isGif=GifOnly.checked

    
    //data me se required mood filter krne ke liye yeh function
    const matchingCatsArray=catsData.filter(function(cat){
        if(isGif){
            return cat.emotionTags.includes(selectedEmotion) && cat.isGif
        }
        else{
            return cat.emotionTags.includes(selectedEmotion)
        }
         
    })
    return matchingCatsArray


}
}
   

function getEmotionsArray(cats){
    const emotionsArray = []
    //isme catsdata ke pehle emotionTags le rhe h aur
    //fir individually cats ke data ko leke use array me push kr rhe
    for (let cat of catsData){
           for(let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
           
           }
    }
    return emotionsArray
}


 
/*yaha pe main kaam shuru hua hai
  yeh function bnaye h taki jb click ho to
  sare moods display ho*/
  //function ka naam 
function renderEmotionRadios(cats){
    let radioItems= `` //blank liye kyuki isme hi baki emotions ko add krenge
    const emotions=getEmotionsArray(cats);
    for(let emotion of emotions){
        radioItems+=`
        <div class="radio">
        <label for=" ${emotion}">${emotion}</label>
        <input
        type="radio"
        id="${emotion}"
        value="${emotion}"
        name="emotion"
        >
        </div>`
    }
    emotionradios.innerHTML=radioItems;
}
renderEmotionRadios(catsData);