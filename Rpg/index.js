import CharacterData from "./data.js"
import  Character  from "./Character.js";

let TitansArray = ["ArmouredTitan", "BeastTitan", "WarHammerTitan"];
let isWaiting=false
function getNewTitan(){
  const nextTitan=CharacterData[TitansArray.shift()]
   return nextTitan? new Character(nextTitan):{}
}




function attack(){
   

  if(!isWaiting){
   wizard.getDiceHtml()
   monster.getDiceHtml()
   wizard.takeDamage(monster.CurrentDiceScore)
   monster.takeDamage(wizard.CurrentDiceScore)
   render()

     if(wizard.dead){
       endGame()
      }
      else if(monster.dead){
         if(TitansArray.length>0){
            monster=getNewTitan()
            render()
           
           
         }
         else{
            endGame()
         }
      }
  }
   
   }

function render(){
   document.getElementById('hero').innerHTML=wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML=monster.getCharacterHtml()
}
 
document.getElementById('attack-button').addEventListener('click',attack)  


const wizard = new Character(CharacterData.hero);
let monster=getNewTitan()


render()

function endGame(){
   
   isWaiting=true
   const endMessage= monster.Health===0 && wizard.Health===0? `No victors - 
   all creatures are dead`:
   wizard.Health > 0 ? "Eren Jaeger Wins but will the humanity survive?" :
   "The Titans won , Paradis will be extinct"

   const endEmoji=wizard.Health > 0 ? "🔮" :
   "☠️"
   
  
   setTimeout(()=>{
      document.body.innerHTML=`
      <div class="end-game">
           <h2>Game Over</h2>
           <h3>${endMessage}</h3>
          
   
           <p class="end-emoji">${endEmoji}</p>
       </div>
      `
   },1500)
  
  
}

