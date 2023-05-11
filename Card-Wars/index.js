const btn=document.getElementById('btn');
btn.addEventListener("click",getDeck)
let deckId

function getDeck(){
    return fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      deckId=data.deck_id
    }
 )
}
document.getElementById('btn2').addEventListener("click",getCard)
function getCard(){
    return fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res=>res.json())
    .then(data=>{
    document.querySelector('section').innerHTML=`
      <img src=${data.cards[0].image} alt='card1' />
      <img src=${data.cards[1].image} alt='card2' />   `     
    }
 )
}
