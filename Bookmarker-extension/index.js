let myleads=[]
const inputEl=document.getElementById("input-el")
const inputBtn= document.getElementById("input-btn")
const uiEl=document.getElementById("ui-el")
const dltbtn=document.getElementById("btn")
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
const savetab=document.getElementById("save-btn")



if (leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    renderleads()
}


savetab.addEventListener("click",function(){
       chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)  
        localStorage.setItem("myleads",JSON.stringify(myleads))
        renderleads() 
    
})
           
           
           
       })
       






function renderleads(){
let listitems=" "
for(let i=0;i< myleads.length;i++){
    listitems+=`
    <li>
       <a target='_blank' href='${myleads[i]}'> 
        ${myleads[i]} 
        </a>
    </li>`
    
    /* 
      alternative method //
      const li=document.createElementa("li") 
       li.textContent = myLeads[i]
       uiEl.append(li)
     */
}

uiEl.innerHTML=listitems
}



dltbtn.addEventListener("dblclick",function(){
      localStorage.clear()
      myleads=[]
      renderleads ()
})

inputBtn.addEventListener("click",function(){

    myleads.push(inputEl.value)
    inputEl.value=" "
    localStorage.setItem("myleads",JSON.stringify(myleads))
   
   
   
    renderleads()
})


