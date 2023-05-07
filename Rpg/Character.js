import {getDiceRollArray,getDicePlaceholderHtml,getPercentage} from "./utils.js"


function Character(data){
    Object.assign(this,data)


    this.MaxHealth=this.Health
    this.diceArray= getDicePlaceholderHtml(this.dicecount)
    
    this.getDiceHtml=function(){
       this.CurrentDiceScore = getDiceRollArray(this.dicecount);
       this.diceArray=this.CurrentDiceScore.map((num)=>
       `<div class="dice">${num}</div>`).join("")
    }
         
    this.takeDamage =  function(attackScoreArray){
      const totalAttackScore=attackScoreArray.reduce((total,num)=>
         total+num
      )
      this.Health-=totalAttackScore
      if(this.Health<=0){
        this.dead=true
        this.Health=0
        
      }
  
    }
    

    this.getHealthBarHtml = function () {
      const percent = getPercentage(this.Health, this.MaxHealth)
      
      return `
      <div class="health-bar-outer">
          <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
          style="width: ${percent}%;">
          </div>
      </div>`
  }
    
 
    this.getCharacterHtml=function(){
   const{ElementId,Name,Avatar,Health,dicecount}=this;
  const healthBar=this.getHealthBarHtml()

 return ` 
  <div class="character-card">
            <h4 class="name"> ${Name} </h4>
            <img class="avatar" src="${Avatar}"/>
           <div class="health">health: <b> ${Health} </b>
           ${healthBar}
           </div> 
           
           
           <div class="dice-container">
               ${this.diceArray}
           </div>
          
      </div>`
 }
 }
 export default Character