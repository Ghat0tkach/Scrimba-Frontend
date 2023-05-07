// Remember to import the data and Dog class!
import dog from "./Dog.js"
import dogsData from "./data.js"
let currentDogIndex=0
let currentDog=new dog(dogsData[currentDogIndex])
const btn1=document.getElementById("like")
const btn2=document.getElementById("reject")
document.getElementById("like").addEventListener('click', rightSwipe)
document.getElementById("reject").addEventListener('click', leftSwipe)
render()
function render(){
    document.getElementById("card").innerHTML=currentDog.getDogHtml()
}


function getNewDog(){
    if(currentDogIndex<=1){
        currentDogIndex+=1
    }
    else{
        currentDogIndex=0
    }
    currentDog=new dog(dogsData[currentDogIndex])
    render()

}




function rightSwipe(){
   btn2.disabled=true
    document.getElementById("badge-like").style.display="block";
    setTimeout(function(){
        getNewDog(),
        btn2.disabled=false,
        document.getElementById("badge-like").style.display="none";
    },2000)
    
   
    
}
function leftSwipe(){
   
    btn1.disabled=true
    document.getElementById("badge-nope").style.display="block";
    setTimeout(function(){
        getNewDog(),
        btn1.disabled=false,
        document.getElementById("badge-nope").style.display="none";
    },2000)
}